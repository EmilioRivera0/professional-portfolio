import { Dispatch, SetStateAction } from "react";

type Props = {
    content: string;
    category: string;
    setter: Dispatch<SetStateAction<string>>;
};

export function CategoryButton({content, category, setter}: Props) {
    console.log(content === category)
    return (
        <button className={`${category === content? 'bg-green-400' : 'bg-gray-200'} w-full text-lg font-bold rounded-xl border-2`}>{content}</button>
    );
};