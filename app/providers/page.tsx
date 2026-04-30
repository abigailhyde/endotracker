import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import Image from "next/image";
import { BackArrow } from '../ui/BackArrow';
import { ProviderCard } from "../ui/ProviderCard";


export default function Page() {
  return (
    <>
      <div className="relative flex items-center justify-center mx-8 mb-3 mt-5">
        <div className="absolute left-0">
          <BackArrow to="/profile"></BackArrow>
        </div>
        <Heading>Your Providers</Heading>
      </div>

      <ProviderCard name="Mary Smith" to="/intake" photo="/doctor_photo.png" location="UCLA Health"></ProviderCard>
      <ProviderCard name="Mary Smith" to="/intake" photo="/doctor_photo.png" location="UCLA Health"></ProviderCard>
      <ProviderCard name="Mary Smith" to="/intake" photo="/doctor_photo.png" location="UCLA Health"></ProviderCard>
      <ProviderCard name="Mary Smith" to="/intake" photo="/doctor_photo.png" location="UCLA Health"></ProviderCard>
    
      <div className="fixed bottom-15 left-0 w-full px-5 py-6 flex flex-col items-center">
        <div className="w-full max-w-md"> 
          <Button to="/" text="Add a Provider" />
        </div>
      </div>
    </>
    )
}