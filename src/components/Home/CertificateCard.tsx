import { Icon } from "@iconify/react";

import { Certificate } from "@/data/Certificates";

type Props = {
    certificate: Certificate;
    className: string;
};

export function CertificateCard({certificate, className}: Props) {
    return(
        <div
            className={`flex flex-col p-4 justify-between rounded-xl bg-gray-200 ${className}`}
        >
            <div className="flex flex-row items-start md:items-center">
                <h3 className="w-9/12 text-sm lg:text-lg font-semibold">{certificate.title}</h3>
                <div className="flex flex-col w-3/12 gap-2">
                    {certificate.logos.map((it, count) => (
                        <Icon icon={it} width={70} className="mx-auto" key={count} />
                    ))}
                </div>
            </div>
            <h4 className="text-sm lg:text-lg">{certificate.organization}</h4>
            <h4 className="text-sm lg:text-lg">{certificate.date}</h4>
        </div>
    )
};