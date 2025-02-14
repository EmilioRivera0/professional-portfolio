import { Dispatch, SetStateAction } from "react";

type Props = {
    content: string;
    category: string;
    setter: Dispatch<SetStateAction<string>>;
    className?: string;
};

export function CategoryButton({content, category, setter, className}: Props) {
    function click() {
        setter(content);
    };
    return (
        <button
            className={`${(category === content)? 'bg-primary/80 text-white' : 'bg-gray-200'} ${className} text-lg font-bold rounded-xl`}
            onClick={click}
        >
            {content}
        </button>
    );
};