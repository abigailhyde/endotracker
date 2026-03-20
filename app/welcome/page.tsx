import { Button } from "../ui/Button";
import { Paragraph } from "../ui/Paragraph";
import { Heading } from "../ui/Heading";


export default function Page() {
  return (
    <div className="h-screen content-center justify-center flex flex-col mx-15 gap-4">
        <Heading>Meet Eclipse.</Heading>
        <Paragraph>Your endometriosis symptom management app, used by hundreds of providers.</Paragraph>
        <Button to="/intake" text="Sign Up"/>
    </div> 
  );
}