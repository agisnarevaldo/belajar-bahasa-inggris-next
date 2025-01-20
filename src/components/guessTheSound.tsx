"use client";

import {useState, useEffect} from 'react';
import Image from "next/image";
import {Icon} from "@iconify/react";
import GoBack from "@/components/ui/goBack";

interface Vehicle {
    name: string;
    image: string;
    audio: string;
}

const GuessTheSound: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0); // Kontrol slide
    const [feedback, setFeedback] = useState<string>(''); // Untuk feedback benar/salah
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Menentukan apakah jawabannya benar
    const [options, setOptions] = useState<Vehicle[]>([]); // Pilihan gambar untuk setiap slide

    const vehicles: Vehicle[] = [
        {
            name: 'Ambulance',
            image: '/vehicle/ambulance.png',
            audio: '/audio/ambulance.mp3',
        },
        {
            name: 'Car',
            image: '/vehicle/car.png',
            audio: '/audio/car.mp3',
        },
        {
            name: 'airplane',
            image: '/vehicle/airplane.png',
            audio: '/audio/airplane.mp3',
        },
        {
            name: 'Motorcycle',
            image: '/vehicle/motorcycle.png',
            audio: '/audio/motorcycle.mp3',
        },
        {
            name: 'Bicycle',
            image: '/vehicle/bicycle.png',
            audio: '/audio/bicycle.mp3',
        },
        {
            name: 'Truck',
            image: '/vehicle/truck.png',
            audio: '/audio/truck.mp3',
        },
        {
            name: 'Helicopter',
            image: '/vehicle/heli.png',
            audio: '/audio/helicopter.mp3',
        },
        {
            name: 'Train',
            image: '/vehicle/train.png',
            audio: '/audio/train.mp3',
        }
    ];

    // Helper function to shuffle an array
    const shuffleArray = (array: Vehicle[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Efek untuk memulai permainan dan memutar suara awal serta suara kendaraan
    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance("Coba tebak suara apakah ini?");
        speechSynthesis.speak(utterance);

        const vehicleAudio = new Audio(vehicles[currentSlide].audio);
        vehicleAudio.play();

        // Membuat pilihan acak (1 benar, 2 salah)
        const wrongAnswers = vehicles.filter((_, index) => index !== currentSlide); // Pilihan salah
        const randomWrongAnswers = shuffleArray(wrongAnswers).slice(0, 2); // Ambil 2 pilihan salah
        const newOptions = shuffleArray([vehicles[currentSlide], ...randomWrongAnswers]); // Gabung dengan jawaban benar dan acak
        setOptions(newOptions);

        // Cleanup untuk menghentikan audio jika komponen tidak aktif
        return () => {
            vehicleAudio.pause();
            vehicleAudio.currentTime = 0;
        };
    }, [currentSlide]);

    // Function untuk memeriksa jawaban dan memberikan feedback
    const checkAnswer = (vehicleName: string) => {
        const correctAnswer = vehicles[currentSlide].name;
        const utterance = new SpeechSynthesisUtterance(vehicleName);
        speechSynthesis.speak(utterance);

        if (vehicleName === correctAnswer) {
            setIsCorrect(true);
            setFeedback(`Benar! Ini adalah ${vehicleName}`);
        } else {
            setIsCorrect(false);
            setFeedback("Salah! Coba lagi.");
        }
    };

    // Untuk berpindah ke slide berikutnya jika jawaban benar
    const nextSlide = () => {
        if (isCorrect && currentSlide < vehicles.length - 1) {
            setCurrentSlide(currentSlide + 1);
            setFeedback('');
            setIsCorrect(null);
        }
    };

    return (
        <div className="flex flex-col justify-center min-h-screen gap-20 text-center">

            <div className="text-black absolute left-1/2 -translate-x-1/2 top-5">
                <h1 className="text-3xl font-bold">Tebak Suara Kendaraan</h1>
                <div
                    className={`text-xl font-semibold bg-neutral-200 py-4 rounded-lg ${
                        isCorrect === true ? 'text-green-500' : isCorrect === false ? 'text-red-500' : 'text-black'
                    }`}
                >
                    {feedback}
                </div>
            </div>

            <div className="slideshow flex w-full justify-center items-center gap-10">
                {options.map((vehicle, index) => (
                    <div key={index} className="slide">
                        <Image
                            src={vehicle.image}
                            alt={vehicle.name}
                            onClick={() => checkAnswer(vehicle.name)}
                            width={300}
                            height={300}
                            className="cursor-pointer hover:scale-110 transform transition duration-200"
                            // style={{ cursor: 'pointer', margin: '10px' }}
                        />
                    </div>
                ))}
            </div>

            {isCorrect && (
                <button
                    onClick={nextSlide}
                    className="bg-[#A1FF14] text-[#131313] px-4 py-4 rounded-lg w-max mx-auto absolute bottom-20 left-1/2 -translate-x-1/2 border-none shadow-[5px_5px_10px_rgba(0,0,0,0.116)] transition-transform duration-200 cursor-pointer hover:bg-[#C0FF14] active:scale-95"
                >
                    <Icon icon="fluent:next-24-filled"/>
                </button>
            )}

            <GoBack href="/menu" classname="absolute top-4 left-4"/>
        </div>
    );
};

export default GuessTheSound;
