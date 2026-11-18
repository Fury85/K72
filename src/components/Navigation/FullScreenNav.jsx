import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import { useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setnavOpen] = useContext(NavbarContext);

  (useGSAP(function () {
    const tl = gsap.timeline();

    tl.from(".stairing", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.25,
      },
    });

    tl.pause();

    if (navOpen) {
      fullScreenRef.current.style.display = "block";
      tl.play();
    } else {
      fullScreenRef.current.style.display = "none";
      tl.reverse();
    }
  }),
    [navOpen]);
  return (
    <div
      ref={fullScreenRef}
      id="full-screen"
      className="h-screen w-full overflow-x-hidden absolute bg-black z-50"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksRef} className="relative">
        <div className="flex w-full justify-between items-start p-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="118"
              height="52"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>

          <div
            onClick={() => {
              setnavOpen(false);
            }}
            className="h-28 w-28 relative px-2 cursor-pointer hover:text-[#d3fd50]"
          >
            <div className="h-36 w-0.5 absolute -rotate-45 origin-top bg-white"></div>
            <div className="h-36 w-0.5 absolute rotate-45 right-0 origin-top bg-white"></div>
            <div></div>
          </div>
        </div>

        <div id="all-links" className="py-1">
          <div className="link origin-top relative border-y border-gray-500">
            <h1 className="font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
              Projects
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND.jpg"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y border-gray-500">
            <h1 className="font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
              Agence
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/CAMILLE_480X640_2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/Isa_640X960.jpg"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/CAMILLE_480X640_2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Tout Savoir
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/Isa_640X960.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y border-gray-500">
            <h1 className="font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
              Contact
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND.jpg"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Pour Envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y border-gray-500">
            <h1 className="font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
              Blogue
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Lire Les Articles
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND 2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Lire Les Articles
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND 3.gif"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Lire Les Articles
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND 2.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-lausanne font-semibold leading-[0.8] pt-4 text-center text-[8vw] uppercase">
                  Lire Les Articles
                </h2>
                <img
                  className="h-20 w-56 shrink-0 rounded-full object-cover"
                  src="../../../public/Img/caseStudies iA_BRAND 3.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
