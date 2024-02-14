/* eslint-disable react-hooks/rules-of-hooks */
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import { ProductType } from '../../shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
  children: Array<ProductType>;
  autoSlide: boolean;
  autoSlideInterval: number;
}

export default function Carousel ({
  children: product,
  autoSlide = false,
  autoSlideInterval = 3000,
}: Props){
    const [currentSlide, setCurrentSlide ] = useState(0)
    // const prev = () => setCurrentSlide(currentSlide => currentSlide === 0? slides.length - 1 : currentSlide - 1 )
    const images = product.map((prd: ProductType) => (prd.image))
  
    const slide = product[currentSlide]
    const next = () => setCurrentSlide(currentSlide => currentSlide === images.length - 1 ? 0 : currentSlide + 1 )

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
      }, [])
      
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


      
  return (
    <div className='md:h-full md:w-5/6 h-[600px] w-[300px] overflow-hidden relative flex items-center justify-end flex-col md:flex-row rounded-lg'>
        <div 
        className='md:absolute h-full w-full flex transition-transform ease-out duration-500 z-0'
        // style={{ transform: `translateX(-${currentSlide*5}%)`}}
        >
          <img alt={`${slide.image}`} key={`${slide.image}-${slide.id}`} className="h-[300px] w-[300px] md:h-full md:w-full" src={slide.image}/>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_: string, index: number) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${currentSlide === index ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
      <div className='md:basis-1/3 h-full w-full bg-black-400 z-10 flex flex-row justify-between p-8 rounded-b-lg md:rounded-r-lg'>
        {/* Header & Description */}
        <div className='flex flex-col items-end justify-start gap-2 md:gap-6'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}>
        <h1 className='text-white-100 text-3xl md:text-5xl text-end w-full'>{`${slide.name}`}</h1>
        </motion.div>

        {isAboveMediumScreens?
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}>
        <h4 className="text-white text-md md:text-xl text-end font-montserratAlternates font-light">
        {`${slide.description}`}
        </h4>
        </motion.div> : <div/>
        }

        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}>
        <h1 className='text-white-100 text-2xl md:text-5xl text-end w-full'>R$ {`${slide.price}`},00</h1>
        </motion.div>

        <motion.div
        className='flex items-center justify-center'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}>
        <button className='w-full bg-black-100 text-white p-2 rounded-md'>Escolher este momento</button>
        </motion.div>
        </div>
        
        {/* Icon */}
        <button onClick={next} className="items-center">
            <ChevronRightIcon stroke="#FBF7F7" fill="#FBF7F7" className="h-20 w-20"/>
        </button>
      </div>
    </div>
  )
}