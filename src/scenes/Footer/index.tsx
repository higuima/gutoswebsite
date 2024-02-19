import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import whatsapp from "../../assets/whatsapp_black.png";
import instagram from "../../assets/instagram.png";
import email from "../../assets/email.png";

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
};

const Footer = ( {setSelectedPage} : Props) => {

  return <footer>
    <motion.div 
        className="flex items-center justify-around h-[200px] bg-gray-50 z-20"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}
    >
      <motion.div
            className="w-2/3 flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
        >
            <h1 className="text-black-300 text-4xl md:text-6xl text-start basis-2/3 hover:scale-110 transform transition duration-500">GUTO GUIMARÃES</h1>
            
            <div className="w-1/3 flex flex-row justify-center items-center basis-1/3 gap-8 md:justify-between">
            <a href="mailto:higuima13@gmail.com" target="_blank"><img className="w-8 h-8 md:w-14 md:h-14 hover:scale-125 transform transition duration-500" alt="Chat on WhatsApp" src={email}/></a>
            <a href="https://wa.me/554888681818" target="_blank"><img className="w-8 h-8 md:w-14 md:h-14 hover:scale-125 transform transition duration-500" alt="Chat on WhatsApp" src={whatsapp} /></a>
            <a href="https://www.instagram.com/ondadoguto/" target="_blank"><img className="w-8 h-8 md:w-14 md:h-14 hover:scale-125 transform transition duration-500" alt="Chat on WhatsApp" src={instagram} /></a>
            </div>
        </motion.div>
    </motion.div>
  </footer>
}

export default Footer