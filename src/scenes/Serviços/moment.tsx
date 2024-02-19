/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { ChevronRightIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ProductType } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import whatsapp from "../../assets/whatsapp.svg";
import '../../index.css'

type Props = {
  children: Array<ProductType>;
  autoSlide: boolean;
  autoSlideInterval: number;
};

export default function Moment({
  children: product,
  autoSlide = false,
  autoSlideInterval = 3000,
}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const prev = () => setCurrentSlide(currentSlide => currentSlide === 0? slides.length - 1 : currentSlide - 1 )
  const images = product.map((prd: ProductType) => prd.image);

  const styleButton = 'active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-100'
  
  const slide = product[currentSlide];

  const next = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [locationChoice, setLocationChoice] = useState("");
  const [playlistChoice, setplaylistChoice] = useState("");

  const [message,setMessage] = useState("")
  const messageText = "Olá tenho interesse em agendar um momento!%0A" + message + "%0ALocalização escolhida: " + locationChoice + "%0APlaylist escolhida: " + playlistChoice
  
  return (
    <>
      {isAboveMediumScreens ? (
        // ABOVE MEDIUM SIZE
        <div className="w-5/6 md:h-[570px] overflow-hidden relative flex items-center justify-end flex-col md:flex-row rounded-xl mb-6">
          <div className="md:absolute h-full w-full flex transition-transform ease-out duration-500 z-0">
            <img
              alt={`${slide.image}`}
              key={`${slide.image}-${slide.id}`}
              className="h-fit w-[300px] md:h-full md:w-full"
              src={slide.image}
            />
          </div>
          <div className="absolute bottom-4 left-[30%]">
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
          <div className="md:basis-1/3 h-full w-full bg-black-400 z-10 flex flex-row items-center justify-between pl-6 rounded-r-xl">
            {/* Header & Description */}
            <div className="flex flex-col items-center md:items-end md:justify-start gap-2 md:gap-4 text-balance text-end">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h1 className="text-white-100 text-3xl md:text-5xl w-full">{`${slide.name}`}</h1>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h4 className="text-white text-sm md:text-md text-end font-montserratAlternates font-light">
                  {`${slide.description}`}
                </h4>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 120 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h1 className="text-white-100 text-2xl md:text-4xl text-end w-full">
                  R$ {`${slide.price}`},00
                </h1>
              </motion.div>

              <motion.div
                className={`w-[75%] bg-black-100 text-white rounded-md text-center font-oswald font-normal ${styleButton}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 150 },
                  visible: { opacity: 1, y: 0 },
                }}
                id={slide.id}
              >
                <button
                  className={`p-2 rounded-md ${styleButton}`}
                  id={slide.id}
                  onClick={() => {
                    setLocationChoice(slide.id);
                  }}
                >
                  Escolher este momento
                </button>
              </motion.div>
            </div>

            {/* Icon */}
            <button onClick={next} className="flex items-center justify-end">
              <ChevronRightIcon
                stroke="#FBF7F7"
                fill="#FBF7F7"
                className="h-20 w-20"
              />
            </button>
          </div>
        </div>
      ) : (
        // BELLOW MEDIUM SIZE
        <div className="w-5/6 overflow-hidden relative flex items-center justify-between flex-col rounded-lg mb-20">
          <div className="h-full w-full flex transition-transform ease-out duration-500 z-0">
            <img
              alt={`${slide.image}`}
              key={`${slide.image}-${slide.id}`}
              className="h-fit w-full"
              src={slide.image}
            />
          </div>
          <div className="-mt-8 flex items-center justify-center z-10 mb-4">
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
          <div className="md:basis-1/3 h-fit w-full bg-black-400 z-10 flex flex-row items-center justify-center md:justify-between pl-4 py-4 rounded-b-lg md:rounded-r-lg">
            {/* Header & Description */}
            <div className="flex flex-col items-center md:items-end md:justify-start gap-2 md:gap-4 text-balance text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: -5 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h1 className="text-white-100 text-3xl md:text-5xl w-full">{`${slide.name}`}</h1>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h4 className="text-white text-sm font-montserratAlternates font-light">
                  {`${slide.description}`}
                </h4>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h1 className="text-white-100 text-2xl md:text-4xl text-end w-full">
                  R$ {`${slide.price}`},00
                </h1>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                id={slide.id}
              >
                <button
                  className={`w-full bg-black-100 text-white p-2 rounded-md ${styleButton}`}
                  onClick={() => {
                    setLocationChoice(slide.id);
                  }}
                >       
                  Escolher este momento
                </button>
              </motion.div>
            </div>

            {/* Icon */}
            <button onClick={next} className="flex items-center justify-end">
              <ChevronRightIcon
                stroke="#FBF7F7"
                fill="#FBF7F7"
                className="h-20 w-20"
              />
            </button>
          </div>
        </div>
      )}

      {/* CHOOSE PLAYLIST */}
      <div className="w-5/6 h-fit flex flex-col gap-4">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-white-100 text-2xl md:text-4xl text-center md:text-start">
            Escolha sua playlist
          </h1>
        </motion.div>
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="text-white text-md font-montserratAlternates font-light text-starts">
            Escolha 15 músicas de um vasto repertório
          </h3>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 h-fit">
          {/* MUSICAS INTERNACIONAIS */}
          <motion.div
            className="border-4 border-black-100 rounded-lg p-5 text-center flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-white-100 text-lg md:text-xl">
              Internacionais
            </h1>
            <h2 className="text-white-100 text-lg md:text-xl font-montserratAlternates">
              R$0,00
            </h2>
            <button
              className={`w-full bg-black-100 text-white p-2 rounded-md ${styleButton}`}
              onClick={() => {
                setplaylistChoice("internacionais");
              }}
            >
              Escolher esta playlist
            </button>
          </motion.div>
          {/* MUSICAS MPB */}
          <motion.div
            className="border-4 border-black-100 rounded-lg p-5 text-center flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-white-100 text-lg md:text-xl">
              Popular Brasileira
            </h1>
            <h2 className="text-white-100 text-lg md:text-xl font-montserratAlternates">
              R$0,00
            </h2>
            <button
              className={`w-full bg-black-100 text-white p-2 rounded-md ${styleButton}`}
              onClick={() => {
                setplaylistChoice("mpb");
              }}
            >
              Escolher esta playlist
            </button>
          </motion.div>
          {/* PERSONALIZADAS */}
          <motion.div
            className="border-4 border-black-100 rounded-lg p-5 text-center flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 170 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-white-100 text-lg md:text-xl">Personalizado</h1>
            <h2 className="text-white-100 text-lg md:text-xl font-montserratAlternates">
              R$100,00
            </h2>
            <button
              className={`w-full bg-black-100 text-white p-2 rounded-md ${styleButton}`}
              onClick={() => {
                setplaylistChoice("personalizada");
              }}
            >
              Escolher esta playlist
            </button>
          </motion.div>
        </div>
      </div>

      {/* ENVIE SUA MENSAGEM */}
      <div id='contato' className="w-5/6 flex flex-col gap-4">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-white-100 text-2xl md:text-4xl text-center md:text-start">
            Envie sua mensagem e agende seu momento agora mesmo!
          </h1>
        </motion.div>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-col gap-4 md:basis-2/3">
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <textarea
            className="editable w-full px-4 pb-6 pt-4 text-white-100 rounded-lg bg-black-100 placeholder:text-md md:placeholder:text-xl placeholder:font-normal placeholder:font-montserratAlternates font-montserratAlternates"
            placeholder="Mensagem Personalizada"
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
            >
            </textarea>
          
          </motion.div>
          {/* SUBMIT */}
          <div className="flex justify-end">
            <div className={`w-full md:w-1/2 gap-2 flex flex-row items-center justify-around bg-black-400 text-white p-3 rounded-md ${styleButton}`}>
              <img className="w-6 h-6 md:w-10 md:h-10" alt="Chat on WhatsApp" src={whatsapp} />
              <a
                className="text-lg"
                aria-label="Chat on WhatsApp"
                href={`https://wa.me/554888681818/?text=${messageText}`}
                target="_blank"
              >
                Enviar escolhas via Whatsapp
              </a>
            </div>
          </div>
        </div>
        {/* "CARRINHO" */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            className="space-y-2 w-full p-4 text-white-100 rounded-lg bg-black-100 font-normal text-lg md:basis-1/3">
            <h1 className="font-montserratAlternates font-extralight flex flex-row gap-2">
              <div className="has-tooltip">
              <span className='tooltip rounded shadow-lg p-1 bg-black-300 text-white-100 text-sm -mt-9'>Selecione uma localização e uma playlist acima</span>
              <InformationCircleIcon className="w-6 h-6">´
              </InformationCircleIcon> 
              </div>
              Momento escolhido:</h1>
            <div className="w-full p-4 text-black-100 rounded-lg bg-gray-50">
              Localização: {locationChoice? locationChoice: "" }
            </div>
            <div className="w-full p-4 text-black-100 rounded-lg bg-gray-50">
              Playlist: {playlistChoice? playlistChoice: ""}
            </div>
            </motion.div>
        </div>
      </div>
    </>
  );
}
