"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import modul yang dibutuhkan
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

interface Slide {
    image: string;
    englishText: string;
    indonesiaText: string;
}

interface SlideshowProps {
    slides: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef<Swiper>(null);

    useEffect(() => {
        const swiper = swiperRef.current;

        if (swiper) {
            const swiperInstance = swiper.swiper; // Akses instance Swiper

            swiperInstance.on('slideChange', () => {
                setCurrentIndex(swiperInstance.activeIndex);
                readSlideText(swiperInstance.activeIndex);
            });

            // Membaca teks pada slide pertama saat slideshow dimuat
            readSlideText(0);

            return () => {
                swiperInstance.off('slideChange');
            };
        }
    }, []);

    const readSlideText = (index: number) => {
        const slide = slides[index];
        const englishText = slide.englishText;
        const indonesiaText = slide.indonesiaText;

        speak(englishText, 'en-US');
        // Memberi jeda sebelum membaca teks bahasa Indonesia
        setTimeout(() => {
            speak(indonesiaText, 'id-ID');
        }, 2000); // Jeda 3 detik
    };

    const speak = (text: string, lang: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        speechSynthesis.speak(utterance);
    };

    return (
        <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }} // Ganti slide setiap 5 detik
            onSwiper={(swiper) => console.log(swiper)} // Ini akan menampilkan instance Swiper
            onSlideChange={() => console.log('slide change')}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col gap-2 items-center justify-center h-[550px]">
                        <Image
                            src={slide.image}
                            alt={slide.englishText}
                            width={400}
                            height={500}
                            className="mx-auto"
                        />
                        <div className="bg-neutral-100 p-4 w-1/4 text-center rounded-xl">
                            <h3 className="text-2xl font-bold text-red-600">{slide.englishText}</h3>
                            <p className="text-black">{slide.indonesiaText}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slideshow;