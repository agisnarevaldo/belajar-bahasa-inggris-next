import Slideshow from "@/components/slideShow";
import GoBack from "@/components/ui/goBack";
const slides = [
    {
        image: '/vehicle/car.png',
        englishText: 'Car',
        indonesiaText: 'Mobil',
    },
    {
        image: '/vehicle/bus.png',
        englishText: 'Bus',
        indonesiaText: 'Bis',
    },
    {
        image: '/vehicle/train.png',
        englishText: 'Train',
        indonesiaText: 'Kereta Api',
    },
    {
        image: '/vehicle/angkot.png',
        englishText: 'Public Transport',
        indonesiaText: 'Angkutan Umum',
    },
    {
        image: '/vehicle/ambulance.png',
        englishText: 'Ambulance',
        indonesiaText: 'Ambulan',
    },
    {
        image: '/vehicle/truck.png',
        englishText: 'Truck',
        indonesiaText: 'Truk',
    },
    {
        image: '/vehicle/bicycle.png',
        englishText: 'Bicycle',
        indonesiaText: 'Sepeda',
    },
    {
        image: '/vehicle/motorcycle.png',
        englishText: 'Motorcycle',
        indonesiaText: 'Motor',
    },
    {
        image: '/vehicle/airplane.png',
        englishText: 'Airplane',
        indonesiaText: 'Pesawat Terbang',
    },
    {
        image: '/vehicle/boat.png',
        englishText: 'Boat',
        indonesiaText: 'Perahu',
    },
];

export default function Page() {
    return (
        <div className="">
            <GoBack href={'/menu'} classname="z-50" />
            <Slideshow slides={slides} />
        </div>
    )
}