import { useState } from "react";

const imagenes = [
  "./image1.jpeg",
  "./image2.jpeg",
  "./image3.jpeg",
  "./image4.jpeg",
  "./image5.jpeg",
  "./image6.jpeg",
  "./image11.jpeg",
  "./image9.jpeg",
];

const videos = ["video1.mp4", "video2.mp4"];

const Pictures = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {imagenes.map((imagen, index) => (
        <img
          key={index}
          src={imagen}
          className="rounded-lg cursor-pointer
          h-[250px] w-[200px]
          hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        />
      ))}
    </div>
  );
};

const VideosMemories = () => {
  return (
    <div className="flex flex-wrap gap-8 ">
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
  );
};
function App() {
  const [showImages, setShowImages] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(/image10.jpeg)` }}
      className={`h-screen font-bold text-[#5e4934] flex ${showImages || showVideos ? "flex-row" : "flex-col"} justify-center items-center`}
    >
      <div className="bg-[#fdf6e3] rounded-lg p-10 text-[#2c3e50]">
        <p>Esto es para ti, mi niña bonita, feliz día de San Valentin</p>
        <p>Esto es solo el inicio, vendrán muchas momentos más</p>
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
        className=" m-10 p-10 max-w-[980px] min-h-4/6 text-[#1e293b]
        h-auto bg-[#fdf6e3] rounded-lg
        flex flex-col items-center justify-start px-8"
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
