"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { Observation } from "fhir/r4";
import { getPatientObservations } from "../lib/fhir/resources";
import { Heading } from "../ui/Heading";
import { BackArrow } from "../ui/BackArrow";
import symptomData from "../lib/symptoms.json";
import type { SymptomGroup } from "../lib/types";

const codeToDisplay: Record<string, string> = {};
(symptomData as SymptomGroup[]).forEach((group) =>
    group.symptoms.forEach((s) => {
        codeToDisplay[String(s.code)] = s.display;
    })
);

type SymptomRow = { Date: string; Time: string; Code: string; Symptom: string };

function flattenObservation(obs: Observation): SymptomRow[] {
    const [date, timePart] = (obs.effectiveDateTime ?? "").split("T");
    const time = timePart?.split(".")[0] ?? "Unknown";
    return (obs.component ?? []).map((c) => {
        const code = c.code?.coding?.[0]?.code ?? "";
        return {
            Date: date ?? "Unknown",
            Time: time,
            Code: code,
            Symptom: codeToDisplay[code] ?? code,
        };
    });
}

export default function Page() {
    const [observations, setObservations] = useState<Observation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPatientObservations().then((obs) => {
            setObservations(obs);
            setLoading(false);
        });
    }, []);

    function handleDownload() {
        const rows = observations.flatMap(flattenObservation);
        const csv = Papa.unparse(rows);
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "symptoms.csv";
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <>
            <div className="relative flex items-center justify-center mx-8 mb-3 mt-5">
                <div className="absolute left-0">
                    <BackArrow to="/home" />
                </div>
                <Heading>Export Symptoms</Heading>
            </div>
            <div className="flex flex-col mx-10 my-4 gap-4">
                {loading ? (
                    <p className="text-center text-sm">Loading observations...</p>
                ) : (
                    <>
                        <p className="text-center text-sm">{observations.length} observation(s) found.</p>
                        <button
                            onClick={handleDownload}
                            className="bg-dark-beige py-2 rounded-sm"
                        >
                            Download CSV
                        </button>
                        
                    </>
                )}
            </div>
        </>
    );
}