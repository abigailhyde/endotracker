"use client"

import { Suspense, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "../ui/Button";
import { Paragraph } from "../ui/Paragraph";
import { Heading } from "../ui/Heading";
import { login } from "../lib/fhir/auth";

function AutoLogin() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const auto = searchParams.get("auto")

  useEffect(() => {
    if (auto && !error) {
      login()
    }
  }, [auto, error])

  return null
}

export default function Page() {
  return (
    <div className="h-screen content-center justify-center flex flex-col mx-15 gap-4">
        <Suspense>
          <AutoLogin />
        </Suspense>
        <Heading>Meet Eclipse.</Heading>
        <Paragraph>Your endometriosis symptom management app, used by hundreds of providers.</Paragraph>
        <Button onClick={login} text="Patient Login"/>
        <Button to="/auth/providerauth" text="Provider Login"/>
    </div>
  );
}