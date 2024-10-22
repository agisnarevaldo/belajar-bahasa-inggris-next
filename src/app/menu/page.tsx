"use client";

import {useEffect} from "react";
import CardMenu from "@/components/ui/cardMenu";

export default function Page() {
    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance('Kamu bisa memilih menu belajar, bermain, atau bernyanyi');
        utterance.lang = 'id-ID';

        setTimeout(() => {
            speechSynthesis.speak(utterance);
        }, 500);
    }, []); // usseEffect hanya dijalankan sekali setelah render pertama
    return (
        <div className="bg-blue-400 min-h-screen flex items-center justify-center gap-6">
            <CardMenu image="/belajar.png" href="/belajar" txt="Belajar" />
            <CardMenu image="/bermain.png" href="/bermain" txt="Bermain" />
            <CardMenu image="/bernyanyi.png" href="/bernyanyi" txt="Bernyanyi" />
        </div>
    )
}