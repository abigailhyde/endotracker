"use client"

import { Button } from "../ui/Button";
import { Paragraph } from "../ui/Paragraph";
import { Heading } from "../ui/Heading";
import { login } from "../lib/fhir/auth";


export default function Page() {

  return (
    <div className="h-screen content-center justify-center flex flex-col mx-15 gap-4">
        <Heading>Meet Eclipse.</Heading>
        <Paragraph>Your endometriosis symptom management app, used by hundreds of providers.</Paragraph>
        <Button onClick={login} text="Patient Login"/>
        <Button to="/auth/providerauth" text="Provider Login"/>
    </div> 
  );
}