
import { motion } from 'framer-motion';
import { SelectedPage } from "../../shared/types";
import { products } from '../../shared/products';
import Moment from './moment';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}



const Servicos = ({setSelectedPage}: Props) => {

  return <section id='serviços' className='flex flex-col' >
    <motion.div 
        className="flex items-center justify-center h-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.Serviços)}
    >
        {/* PRODUCT DESCRIPTION */}
        <div className='bg-black-100 w-full flex items-center justify-center py-20 flex-col gap-6'>
        <motion.div
            className='w-3/4'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <h1 className='text-white-100 text-4xl md:text-6xl text-start'>O que é uma serenata natural?</h1>
        </motion.div>
        <motion.div
            className='w-3/4'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}>
           <h3 className="text-white text-xl md:text-3xl text-starts font-montserratAlternates font-extralight">Um show particular para você nos lugares mais alucinantes da ilha da magia!
                <strong> Amor, arte, comida boa e contato com a natureza</strong> fazem a receita para um momento único e inesquecível.
                Experimente presentar alguém com um momento mágico!
            </h3>
        </motion.div>
        </div>
    </motion.div>
     {/* PRODUCT DISPLAY */} 
     <div className='bg-black-200 w-full flex justify-center items-center'>
        <div className='w-5/6 h-full flex justify-center flex-col gap-8 items-center my-10'>
        <motion.div
            className='w-5/6'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <h1 className='text-white-100 text-4xl md:text-6xl text-center md:text-start'>Monte seu momento ideal</h1>
        </motion.div>
          <Moment
          autoSlide={false}
          autoSlideInterval={0} 
          children={products}>
          </Moment>
        </div>
     </div>
  </section>
}

export default Servicos