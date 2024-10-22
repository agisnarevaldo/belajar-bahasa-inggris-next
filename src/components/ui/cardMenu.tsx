import Image from "next/image";
import Button from "@/components/ui/button";

export default function CardMenu({image, href, txt}: {image: string, href: string, txt: string}) {
    return (
        <div
            className="border border-yellow-500 h-[300px] flex flex-col justify-between p-6 rounded-xl hover:scale-110 transition-transform duration-200 shadow-lg bg-neutral-100">
            <Image src={image} alt={txt} width={250} height={300}/>
            <Button href={href} txt={txt} classname="w-max mx-auto mt-2"/>
        </div>
    )
}