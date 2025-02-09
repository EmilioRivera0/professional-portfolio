import Link from "next/link";

type PagePath = {
    title: string;
    path: string;
};

const pages : PagePath[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Projects',
        path: '/projects',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
];

export function Header() {
    return (
        <section>
            {/* Desktop Devices */}
            <section className="flex flex-row max-md:hidden px-6 py-2 justify-between text-lg lg:text-xl">
                <div className="w-1/4 my-auto">
                    <h2>Emilio Rivera Macías</h2>
                    <h3>Computer Systems Engineer</h3>
                </div>
                <div className="flex flex-row w-2/4 my-auto justify-center gap-12 lg:gap-36">
                    {pages.map((it, index) => (<Link href={it.path} key={index}>{it.title}</Link>))}
                </div>
                <div className="flex w-1/4 my-auto justify-end">
                    <Link className="mr-8 lg:mr-12" href='/cv'>CV</Link>
                </div>
            </section>
            {/* Mobile Devices */}
            <section className="flex-row md:hidden">Small</section>
        </section>
    );
}
