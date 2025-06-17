import { CertificateCard } from "./CertificateCard";
import { certificates } from "@/data/Certificates";

export function Certificates() {
    return(
        <section className="w-11/12 mx-auto space-y-4 reveal">
            <h2 className={`text-center text-xl md:text-2xl lg:text-4xl font-bold`}>Certificates</h2>
            <div className={`flex flex-wrap justify-center gap-3`}>
                {certificates.map((it, index) => (
                    <CertificateCard certificate={it} key={index} className="md:w-5/12 lg:w-3/12" />
                ))}
            </div>
        </section>
    );
}