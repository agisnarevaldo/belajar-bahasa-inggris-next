import Link from "next/link";
import {Icon} from "@iconify/react";

export default function GoBack({href, classname}: {href: string, classname?: string}) {
    return (
        <Link
            href={href}
            className={`${classname} absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg text-black cursor-pointer hover:bg-gray-200 text-3xl`}
        >
            <Icon icon="pajamas:go-back" />
        </Link>
    )
}