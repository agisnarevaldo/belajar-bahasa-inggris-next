import Image from "next/image";
import Button from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-blue-400">
            <div className=" absolute bottom-0 w-full">
                <Button classname="absolute left-1/2 -translate-x-1/2 top-1/3 mx-auto w-max"/>
                <Image src="/actors.png" alt="actors" width={400} height={500} className="mx-auto"/>
                <Image src="/road.png" alt="road" width={1000} height={500}
                       className="w-full"/>
            </div>
        </div>
    );
}
