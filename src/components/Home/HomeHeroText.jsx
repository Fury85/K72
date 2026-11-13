import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-lausanne font-semibold pt-5 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw]">L'étincelle</div>
      <div className="flex items-center justify-center text-[9.5vw] uppercase leading-[8vw]">
        qui
        <div className="h-[6.5vw] w-[15vw] -mt-3 rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
