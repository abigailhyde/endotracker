"use client";
import React, { useState } from 'react';
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { SymptomChip } from "../ui/SymptomChip";
import { SymptomSection } from "../ui/SymptomSection";
import { BackArrow } from '../ui/BackArrow';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Symptom, SymptomGroup } from '../lib/types';
import symptomData from '../lib/symptoms.json'
import { postPatientObservation } from '../lib/fhir/resources';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>("Physical");

  const symptomDataTyped = symptomData as SymptomGroup[]

  type Inputs = {
    selectedSymptomCodes: Array<string>
  }
  const methods = useForm<Inputs>({
    defaultValues: {
      selectedSymptomCodes: []
    }
  })

  const toggleSection = (title: string) => { //now only one accordion section stays open at a time
    setActiveSection(activeSection === title ? null : title);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postPatientObservation(data.selectedSymptomCodes)
    console.log(data)
  }

  return (
    <>
      <div className="relative flex items-center justify-center mx-8 mb-3 mt-5">
        <div className="absolute left-0">
          <BackArrow to="/intake"></BackArrow>
        </div>
        <Heading>Add Symptoms</Heading>
      </div>
      
      <form className="flex flex-col mx-10 my-2 gap-3" onSubmit={methods.handleSubmit(onSubmit)}>
        
        {symptomDataTyped.map((sec) => 
          <SymptomSection
            title={sec.name}
            iconSrc={sec.iconSrc}
            isOpen={activeSection === sec.name}
            onClick={() => toggleSection(sec.name)}
            key={sec.name}
          >
            {sec.symptoms.map((symp) => 
              <SymptomChip symptom={symp} key={symp.code} {...methods.register("selectedSymptomCodes")}/>
            )}
          </SymptomSection>
        )}
        <div className="fixed bottom-15 left-0 w-full px-10 py-6 flex flex-col items-center">
          <div className="w-full max-w-md">
            <button type="submit">Submit</button> 
          </div>
        </div>      
      </form>

      

    </>
  );
}