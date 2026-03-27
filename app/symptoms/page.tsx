"use client";
import React, { useState } from 'react';
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { SymptomChip } from "../ui/SymptomChip";
import { SymptomSection } from "../ui/SymptomSection";
import { BackArrow } from '../ui/BackArrow';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>("Physical");

  const toggleSection = (title: string) => { //now only one accordion section stays open at a time
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <>
      <div className="relative flex items-center justify-center mx-8 mb-3 mt-5">
        <div className="absolute left-0">
          <BackArrow to="/intake"></BackArrow>
        </div>
        <Heading>Add Symptoms</Heading>
      </div>
      
      <div className="flex flex-col mx-10 my-2 gap-3">
        
        <SymptomSection 
          title="Physical" 
          iconSrc="physical.png"
          isOpen={activeSection === "Physical"}
          onClick={() => toggleSection("Physical")}
        >
          <SymptomChip>Headache</SymptomChip>
          <SymptomChip>Pelvic pain</SymptomChip>
          <SymptomChip>Fever</SymptomChip>
          <SymptomChip>Fatigue</SymptomChip>
        </SymptomSection>

        <SymptomSection 
          title="Menstrual" 
          iconSrc="blood.png"
          isOpen={activeSection === "Menstrual"}
          onClick={() => toggleSection("Menstrual")}
        >
          <SymptomChip>Spotting</SymptomChip>
          <SymptomChip>Light bleeding</SymptomChip>
          <SymptomChip>Moderate bleeding</SymptomChip>
          <SymptomChip>Heavy bleeding</SymptomChip>
          <SymptomChip>Clotting</SymptomChip>
        </SymptomSection>

        <SymptomSection 
          title="Mood" 
          iconSrc="mood.png"
          isOpen={activeSection === "Mood"}
          onClick={() => toggleSection("Mood")}
        >
          <SymptomChip>Irritable</SymptomChip>
          <SymptomChip>Anxious</SymptomChip>
          <SymptomChip>Depressed</SymptomChip>
          <SymptomChip>Happy</SymptomChip>
        </SymptomSection>

        <SymptomSection 
          title="Other" 
          iconSrc="heart.png"
          isOpen={activeSection === "Other"}
          onClick={() => toggleSection("Other")}
        >
          <SymptomChip>Cravings</SymptomChip>
          <SymptomChip>Bloating</SymptomChip>
          <SymptomChip>Acne</SymptomChip>
        </SymptomSection>
      </div>

      

      <div className="fixed bottom-0 left-0 w-full px-10 py-6 flex flex-col items-center">
        <div className="w-full max-w-md"> 
          <Button to="/intake" text="Next" />
        </div>
      </div>
    </>
  );
}