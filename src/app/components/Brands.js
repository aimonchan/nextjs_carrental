"use client";

//image
import Image from 'next/image';

//framer
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../../../variants';

const Brands = () => {
    return (
        <section className='xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center'>
            <div className='container mx-auto'>
                {/* brand wrapper*/}
                <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between'>
                    <div>
                        <Image
                        src={'icons/brands/honda-logo.svg'}
                        width={85}
                        height={32}
                        alt='Ford'
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/land-rover.svg'}
                        width={85}
                        height={32}
                        alt='Ford'
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/bmw-logo.svg'}
                        width={85}
                        height={32}
                        alt='Ford'
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/ford-logo.svg'}
                        width={85}
                        height={32}
                        alt='Ford'
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/lexus-logo.svg'}
                        width={85}
                        height={32}
                        alt='Ford'
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/mazda-logo.svg'}
                        width={85}
                        height={32}
                        alt='Ford'
                        />
                    </div>
                    <div>
                        <Image
                        src={'icons/brands/vw-logo.svg'}
                        width={85}
                        height={32}
                        alt='Ford'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;