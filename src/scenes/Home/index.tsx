
import { motion } from 'framer-motion';
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

  return <section id='home' className="h-full py-40 bg-no-repeat
  bg-[url('@/assets/landingPage/pedroViolao.svg')]
  md:bg-[url('@/assets/landingPage/pedroViolao.svg'),_url('@/assets/landingPage/pedroGuitarra.svg')] bg-cover bg-center">
    <motion.div 
        className="flex items-end justify-center h-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        <motion.div
            className="z-20 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
        >
            <div className='z-40 flex justify-center items-center flex-col'> 
              <h1 className="text-white text-6xl md:text-8xl text-center">GUTO GUIMARÃES</h1>
              <h3 className="text-white text-2xl md:text-4xl font-convergence font-thin text-center">músico e guia turístico</h3>
            </div>
        </motion.div>
    </motion.div>
  </section>
}

export default Home