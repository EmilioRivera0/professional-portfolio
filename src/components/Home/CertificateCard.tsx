import { Icon } from "@iconify/react";

import { Certificate } from "@/data/Certificates";

type Props = {
    certificate: Certificate;
    className: string;
};

export function CertificateCard({certificate, className}: Props) {
    return(
        <div
            className={`flex flex-col py-2 px-4 justify-between gap-1 rounded-xl bg-gray-200 ${className}`}
        >
            <div className="flex flex-row">
                <Icon icon="" width={40} />
                <h3 className="text-sm lg:text-lg font-semibold">{certificate.title}</h3>
            </div>
            <h4 className="text-sm lg:text-lg">{certificate.organization}</h4>
            <h4 className="text-sm lg:text-lg">{certificate.date}</h4>
        </div>
    )
};