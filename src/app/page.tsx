import Image from "next/image";
import Button from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="absolute bottom-0 w-full">
                <Button
                    href="/menu"
                    classname="absolute left-1/2 -translate-x-1/2 top-1/3 mx-auto w-max z-50"
                    txt="Start"
                    txt1="Mulai"
                >
                    <svg
                        className="h-[30px] transition-transform duration-[1.5s] hover:rotate-[250deg]"
                        viewBox="0 0 512 512"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                    </svg>
                </Button>
                <Image
                    src="/actors.png"
                    alt="actors" width={400}
                    height={500}
                    className="mx-auto hover:scale-110 transition-transform duration-200"
                />
                <Image src="/road.png" alt="road" width={1000} height={500}
                       className="w-full"/>
            </div>
        </div>
    );
}
