"use client";
import { useEffect, useState } from "react";
import { getPatientObservations } from "../lib/fhir/resources";
import { Heading } from "../ui/Heading";
import { BackArrow } from "../ui/BackArrow";

export default function Page() {
    const [insights, setInsights] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            try {
                const observations = await getPatientObservations();
                const res = await fetch("/api/insights", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ observations }),
                });
                const data = await res.json();
                setInsights(data.insights);
            } catch {
                setError("Failed to load insights. Please try again.");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    return (
        <>
            <div className="relative flex items-center justify-center mx-8 mb-3 mt-5">
                <div className="absolute left-0">
                    <BackArrow to="/home" />
                </div>
                <Heading>Insights</Heading>
            </div>
            <div className="flex flex-col mx-10 my-4 gap-4">
                {loading && <p className="text-center text-sm">Analyzing your symptoms...</p>}
                {error && <p className="text-center text-sm text-red-500">{error}</p>}
                {insights && (
                    <div className="bg-off-white rounded-md p-4 text-sm leading-relaxed whitespace-pre-wrap">
                        {insights}
                    </div>
                )}
            </div>
        </>
    );
}