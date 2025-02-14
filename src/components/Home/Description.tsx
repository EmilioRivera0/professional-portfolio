import { description } from "@/data/AboutMe";

export function Description() {
    return (
        <div className="h-full overflow-scroll p-4 lg:p-6 text-lg md:text-xl lg:text-3xl space-y-1 lg:space-y-2 bg-gray-200 rounded-2xl shadow-2xl">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">About me</h2>
            <div className="space-y-2 lg:space-y-4">
                {description.map((it, index) => (
                    <div key={index}>
                        <p>{it}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}