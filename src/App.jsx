import { useState, useEffect } from "react";
import hands from "./assets/hands.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const imagenes = [
  {
    image: "./image1.jpeg",
    text: "Posando. Toma N°84",
    letter: "T",
  },
  {
    image: "./image2.jpeg",
    text: "Recuerdos preciados en la palma de nuestras manos ",
    letter: "E",
  },
  {
    image: "./image3.jpeg",
    text: "Llevandola a un lugar especial, previas navidad",
    letter: "Q",
  },
  {
    image: "./image4.jpeg",
    text: "Posando con gigantes arboles de navidad, faltaron los patitos rockeros",
    letter: "U",
  },
  {
    image: "./image5.jpeg",
    text: "Preparando una sorpresa con mucho cariño y paciencia, me tomo algo de tiempo. Pero con amor todo se puede",
    letter: "I",
  },
  {
    image: "./image11.jpeg",
    text: "Ella muy feliz con su sorpresa. Te adoro <3",
    letter: "R",
  },
  {
    image: "./image6.jpeg",
    text: "Primera vez comiendo Wafles",
    letter: "E",
  },
  {
    image: "./image9.jpeg",
    text: "En la playa, llendote a buscar y encontrarte despues de horas.",
    letter: "O",
  },
];

const videos = ["video1.mp4", "video2.mp4"];
const estiloTexto = {
  color: "#fff",
  textShadow:
    "0 0 10px #00ff00, " +
    "0 0 20px #00ff00, " +
    "0 0 30px #00ff00, " +
    "0 0 40px #00ff00, " +
    "0 0 50px #00ff00, " +
    "0 0 60px #00ff00, " +
    "0 0 70px #00ff00",
  textAlign: "center",
};

const Pictures = () => {
  return (
    <div>
      <div className="hidden  xl:flex xl:flex-wrap gap-8 ">
        {imagenes.map((imagen, index) => (
          <div
            className="relative cursor-pointer
          hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out
          "
          >
            <img
              key={index}
              src={imagen.image}
              title={imagen.text}
              className="rounded-lg cursor-pointer
          h-[250px] w-[200px]
            "
            />
            <div
              class="opacity-0 hover:opacity-100 duration-300 absolute cursor-pointer
            inset-0 z-10 flex justify-center items-center 
            "
              style={estiloTexto}
            >
              <div className="flex flex-col items-center">
                <h1>{imagen.text}</h1>
                <h1>{imagen.letter}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[150px] xl:w-auto flex xl:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {imagenes.map((imagen, index) => (
            <SwiperSlide>
              <div className="  flex flex-col items-center" style={estiloTexto}>
                <img
                  key={index}
                  src={imagen.image}
                  title={imagen.text}
                  className="rounded-lg cursor-pointer
          h-[180px] w-[150px]
            "
                />
                <p className="">{imagen.text}</p>
                <h1>{imagen.letter}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const VideosMemories = () => {
  return (
    <div>
      <div className="hidden xl:flex xl:flex-wrap gap-8 ">
        {videos.map((video, index) => (
          <video
            key={index}
            width={300}
            height={300}
            controls
            className="rounded-lg cursor-pointer
          hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        ))}
      </div>
      <div className="flex xl:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {videos.map((video, index) => (
            <SwiperSlide>
              <video
                key={index}
                width={300}
                height={300}
                controls
                className="rounded-lg cursor-pointer
          hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                <source src={video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

function App() {
  const [showImages, setShowImages] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(false);
    }, 5000); // Ocultar después de 5 segundos
    return () => clearTimeout(timeout);
  }, []); // Se ejecuta solo una vez al montar el componente
  return (
    <div
      style={{ backgroundImage: `url(${hands}) ` }}
      className={`h-screen font-bold text-[#5e4934] flex px-16
${showImages || showVideos ? "flex-row" : "flex-col"} justify-center items-center`}
    >
      <div
        className={`bg-[#fdf6e3] rounded-lg p-10 text-[#2c3e50] text-sm xl:block ${showContent ? "block" : " hidden"}`}
      >
        <p>Esto es para ti, mi niña bonita, espero te guste</p>
        <p>Lo hice con mucho amor para tí</p>
        <p>Y seguirá mejorando y llenandosé de más recurdos juntos :3</p>
        <div className="flex justify-center items-center gap-2">
          <p>Te adoro mi vida </p>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <div
        className={`
        m-10 p-10 max-w-[980px] min-h-4/6 text-[#1e293b]
        h-auto bg-[#fdf6e3] rounded-lg
        flex flex-col items-center justify-start px-8
${!showContent ? "block" : " hidden"}`}
      >
        <h1 className="flex justify-start w-full">Recuerdos: </h1>
        <button
          className="bg-green-600 w-[150px] px-8 my-4  rounded-full text-[#ffffff] font-bold"
          onClick={() => {
            setShowImages(!showImages);
            setShowVideos(false);
          }}
        >
          Imágenes
        </button>
        <div className={`${showImages ? "block" : "hidden"}`}>
          <Pictures />
        </div>
        <button
          className="bg-green-600 w-[150px] px-8 my-4  rounded-full text-[#ffffff] font-bold"
          onClick={() => {
            setShowVideos(!showVideos);
            setShowImages(false);
          }}
        >
          Videos
        </button>
        <div className={`${showVideos ? "block" : "hidden"}`}>
          <VideosMemories />
        </div>
      </div>
    </div>
  );
}

export default App;
