"use client";

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';

//next image
import Image from 'next/image';

//icons
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

//framer
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../../../variants';

//car data
const cars = [
    
    {
        type: 'Hatchback',
        name: 'Ford Focus',
        price: 29,
        stars: 3.5,
        image: '/images/carSlider/car01.png',
        info:[
            {
                icon:'icons/carSlider/gear.svg',
                text:'Manual',
            },
            {
                icon:'icons/carSlider/seat.svg',
                text:'5 seats',
            },
            {
                icon:'icons/carSlider/gas.svg',
                text:'Gas',
            },
            {
                icon:'icons/carSlider/engine.svg',
                text:'1600 HP',
            },
            {
                icon:'icons/carSlider/wheel.svg',
                text:'Front',
            },
        ],
    },
    {
        type: 'Sedan',
        name: 'Toyota Corolla',
        price: 25,
        stars: 5,
        image: '/images/carSlider/car02.png',
        info:[
            {
                icon:'icons/carSlider/gear.svg',
                text:'Manual',
            },
            {
                icon:'icons/carSlider/seat.svg',
                text:'5 seats',
            },
            {
                icon:'icons/carSlider/gas.svg',
                text:'Gas',
            },
            {
                icon:'icons/carSlider/engine.svg',
                text:'1600 HP',
            },
            {
                icon:'icons/carSlider/wheel.svg',
                text:'Front',
            },
        ],
    },
    {
        type: 'Convertible',
        name: 'Mazda MX-5',
        price: 32,
        stars: 4.9,
        image: '/images/carSlider/car03.png',
        info:[
            {
                icon:'icons/carSlider/gear.svg',
                text:'Automatic',
            },
            {
                icon:'icons/carSlider/seat.svg',
                text:'5 seats',
            },
            {
                icon:'icons/carSlider/gas.svg',
                text:'Gas',
            },
            {
                icon:'icons/carSlider/engine.svg',
                text:'1600 HP',
            },
            {
                icon:'icons/carSlider/wheel.svg',
                text:'Front',
            },
        ],
    },
    {
        type: 'Hatchback',
        name: 'Ford Focus',
        price: 29,
        stars: 3.5,
        image: '/images/carSlider/car01.png',
        info:[
            {
                icon:'icons/carSlider/gear.svg',
                text:'Manual',
            },
            {
                icon:'icons/carSlider/seat.svg',
                text:'5 seats',
            },
            {
                icon:'icons/carSlider/gas.svg',
                text:'Gas',
            },
            {
                icon:'icons/carSlider/engine.svg',
                text:'1600 HP',
            },
            {
                icon:'icons/carSlider/wheel.svg',
                text:'Front',
            },
        ],
    },
    {
        type: 'Sedan',
        name: 'Toyota Corolla',
        price: 25,
        stars: 5,
        image: '/images/carSlider/car02.png',
        info:[
            {
                icon:'icons/carSlider/gear.svg',
                text:'Manual',
            },
            {
                icon:'icons/carSlider/seat.svg',
                text:'5 seats',
            },
            {
                icon:'icons/carSlider/gas.svg',
                text:'Gas',
            },
            {
                icon:'icons/carSlider/engine.svg',
                text:'1600 HP',
            },
            {
                icon:'icons/carSlider/wheel.svg',
                text:'Front',
            },
        ],
    },
    {
        type: 'Convertible',
        name: 'Mazda MX-5',
        price: 32,
        stars: 4.9,
        image: '/images/carSlider/car03.png',
        info:[
            {
                icon:'icons/carSlider/gear.svg',
                text:'Automatic',
            },
            {
                icon:'icons/carSlider/seat.svg',
                text:'5 seats',
            },
            {
                icon:'icons/carSlider/gas.svg',
                text:'Gas',
            },
            {
                icon:'icons/carSlider/engine.svg',
                text:'1600 HP',
            },
            {
                icon:'icons/carSlider/wheel.svg',
                text:'Front',
            },
        ],
    },
];


const CarSlider = () => {
    return (
        <motion.div 
        variants={fadeIn('up',0.8)}
        initial = 'hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.2}} 
        className='container mx-auto'>
            <Swiper
            breakpoints={{
                320:{slidesPerView:1,spaceBetween:15},
                640:{slidesPerView:2,spaceBetween:32},
                1260:{slidesPerView:3,spaceBetween:32},
            }}
            >
                {cars.map((car, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className='max-w-[385px] mx-auto sm:mx-0'>
                                <Image 
                                src={car.image} 
                                width={380} 
                                height={284}
                                alt=''
                                />
                                <div className='flex justify-between'>
                                    <div>
                                        <div className='text-[13px] text-secondary uppercase'>{car.type}</div>
                                        <div className='text-lg uppercase font-bold'>{car.name}</div>
                                        <div className='mb-10 text-accent font-semibold uppercase'>{car.price}/day</div>
                                    </div>
                                {/* stars */}
                                <div className='flex gap-x-2 text-accent h-max'>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                </div>
                            {/* car info */}
                            <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
                                {car.info.map((item, index)=>{
                                    return(
                                        <div key={index} className='flex flex-col items-center'>
                                        <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2'>
                                            <Image 
                                            src={item.icon} 
                                            width={24} 
                                            height={24} 
                                            alt='' 
                                            />
                                        </div>
                                            <div className='text-[12px] uppercase'>{item.text}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className='btn btn-accent btn-lg'>See Detail</button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </motion.div>
    );
};

export default CarSlider;