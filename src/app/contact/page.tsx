import { ContactInfo } from "@/components/Contact/ContactInfo";

export default function ContactPage() {
  return (
    <section className="w-11/12 mx-auto space-y-4">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold">Contact</h1>
      <ContactInfo />
    </section> 
  );
}
