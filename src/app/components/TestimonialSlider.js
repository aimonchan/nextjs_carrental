"use client";

//import swiper react components
import{Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import {Pagination, Navigation} from 'swiper/modules';

//icons
import{FaQuoteLeft} from 'react-icons/fa';

//framer motion
import {motion} from 'framer-motion';

//variants
import{fadeIn} from '../../../variants';

//next image
import Image from 'next/image';

//data
const testimonialData = [
    {
        message:
        'They truly exceeded my expectations and made my car rental experience a delight',
        avatar: '/images/testimonial/avatar.svg',
        name: 'Jane Doe',
        job: 'Photographer & Videographer',
    },
    {
        message:
        'They truly exceeded my expectations and made my car rental experience a delight',
        avatar: '/images/testimonial/avatar.png',
        name: 'Jane Doe',
        job: 'Photographer & Videographer',
    },
]

const TestimonialSlider = () => {
    
    return (
        <motion.div
        variants={fadeIn('up',0.4)}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.6}} 
        className='container mx-auto'
        >
            <Swiper
            pagination={{
                clickable: true,
                dynamicBullets:true,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination, Navigation]}
            className='h-[450px] xl:h-[400px]'
            >
                {testimonialData.map((person,index)=>{
                    const {message, avatar, name, job} = person;
                    return(
                        <SwiperSlide key={index}>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <FaQuoteLeft className='text-7xl text-accent mb-6' />
                                <div className='text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium'>
                                    {message}
                                </div>
                                <Image
                                src={avatar}
                                width={64}
                                height={64}
                                alt=''
                                className='mb-4'
                                />
                                <div className='text-lg font-medium'>{name}</div>
                                <div className='text-secondary'>{job}</div>
                            </div>                      
                        </SwiperSlide>
                    );
                        
                })}
            </Swiper>
            {/* <div className="swiper-button-next">Next</div>
            <div className="swiper-button-prev">Previous</div> */}
        </motion.div>
    );
};

export default TestimonialSlider;