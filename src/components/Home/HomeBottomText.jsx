import { Link } from "react-router";

const HomeBottomText = () => {
  return (
    <div className="font-lausanne font-semibold flex items-center justify-center gap-8">
      <div className="border-2 leading-tight mb-4 border-white hover:border-[#d3fd50] hover:text-[#d3fd50] rounded-full transition-all px-10 uppercase">
        <Link className="text-[6vw]" to="/projects">
          Projects
        </Link>
      </div>
      <div className="border-2 leading-tight mb-4 border-white hover:border-[#d3fd50] hover:text-[#d3fd50] rounded-full transition-all px-10 uppercase">
        <Link className="text-[6vw]" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
