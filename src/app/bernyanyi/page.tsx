import GoBack from "@/components/ui/goBack";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <GoBack href={"/menu"}/>
            <div className="shadow-xl outline outline-2 outline-amber-300 rounded-xl p-1">
                <iframe
                    className="rounded-xl"
                    width="720" height="405" src="https://www.youtube.com/embed/HFwwLjDaUhA?si=p3vaErEsTTnVrjYm"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}