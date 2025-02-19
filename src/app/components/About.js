"use client";

//next image
import Image from 'next/image';

//icons
import {
    MdOutlineMapsHomeWork,
    MdoutlineBuildCircle,
    MdOutlineDirectionsCar,
} from 'react-icons/md';

//react count up
import CountUp from 'react-countup';

//react intersection observer
import {useInView} from 'react-intersection-observer';

//motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../../../variants';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <section className='section flex items-center' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:justify-between xl:gap-x-10'>
                    {/*Image*/}
                    <motion.div
                    variants={fadeIn('up',0.2)}
                    initial= 'hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount:0.6}}
                    className='flex-1 mb-8 xl:mb-0'>
                        <Image
                        className='rounded-[20px]'
                        src={'/images/about/car01.jpg'}
                        width={600}
                        height={448}
                        alt=''
                        />
                    </motion.div>
                    {/*text & stats*/}
                    <div className='flex-1 flex items-center xl:justify-center'>
                        <div className='xl:max-w[517px]'>
                        <motion.h2 
                        variants={fadeIn('up',0.4)}
                        initial= 'hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.6}}
                        className='h2'>Car services simplified
                        </motion.h2>
                        <motion.p
                        variants={fadeIn('up',0.6)}
                        initial= 'hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.6}}
                         className='mb-[42px] max-w-md'>
                            Rent, choose, and repair with ease. Our convenient locations, diverser cart types, and reliable repair points ensures a seamless car experience.
                        </motion.p>
                        {/*stats*/}
                        <div className='flex items-center gap-x-8 mb-12'>
                            {/*car types*/}
                            <div className='flex flex-col w-[100px]'>
                                <MdOutlineDirectionsCar className='text-5xl text-accent mb-2'/>
                                <div className='text-3xl font-black mb-2'>
                                    {inView ? (
                                        <CountUp
                                        start={0}
                                        end={50}
                                        duration={3}
                                        delay={1}
                                        />                               
                                        ): null}
                                        +
                                </div>
                                <div className='uppercase text-[13px] font-semibold text-secondary'>
                                    car<br/>types
                                </div>
                            </div>
                            {/*rental outlets*/}
                            <div className='flex flex-col w-[100px]'>
                                <MdOutlineMapsHomeWork className='text-5xl text-accent mb-2'/>
                                <div className='text-3xl font-black mb-2'>
                                    {inView ? (
                                        <CountUp
                                        start={0}
                                        end={135}
                                        duration={3}
                                        delay={1}
                                        />                               
                                        ): null}
                                        +
                                </div>
                                <div className='uppercase text-[13px] font-semibold text-secondary'>
                                    rental<br/>outlets
                                </div>
                            </div>
                             {/*repair points*/}
                             <div className='flex flex-col w-[100px]'>
                                <MdOutlineDirectionsCar className='text-5xl text-accent mb-2'/>
                                <div className='text-3xl font-black mb-2'>
                                    {inView ? (
                                        <CountUp
                                        start={0}
                                        end={35}
                                        duration={3}
                                        delay={1}
                                        />                               
                                        ): null}
                                        +
                                </div>
                                <div className='uppercase text-[13px] font-semibold text-secondary'>
                                    repair<br/>points
                                </div>
                            </div>
                        </div>
                        {/* btn */}
                        <button className='hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 text-white tracking-[2px] text-[13px] max-w-[184px]'>
                            See all cars
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;