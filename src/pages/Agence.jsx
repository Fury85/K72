import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const imageArray = [
  "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
  "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
  "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
  "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
  "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
  "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
  "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
];

const Agence = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const index = Math.min(
          Math.floor(self.progress * imageArray.length),
          imageArray.length - 1,
        );
        const nextSrc = imageArray[index];

        if (imageRef.current && imageRef.current.src !== nextSrc) {
          imageRef.current.src = nextSrc;
        }
      },
    });
  });

  return (
    <div className="parent">
      <div
        ref={sectionRef}
        id="section-1"
        className="relative py-1 text-black min-h-[110vh]"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="sticky top-[15vh] mt-[30vh] ml-[26vw] h-[20vw] w-[15vw] rounded-4xl overflow-hidden">
            <img
              ref={imageRef}
              className="h-full w-full object-cover"
              src={imageArray[0]}
              alt=""
            />
          </div>
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] leading-[16vw] text-center uppercase">
              Soixan7e <br /> Douze
            </h1>
          </div>

          <div className="pl-[50%] indent-[10em] mt-20">
            <p className="text-4xl ">
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
