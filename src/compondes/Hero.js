import hero from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer ",
      "React Developer",
      "Web Developer",
      "Tailwind CSS Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center"
    >
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-hero-font">
          Hi, <br />I am <span className="text-black">Jerome Clinton</span>
          <p className="text-2xl">
            Im a{" "}
            <span className="text-2xl">
              {text}
              <Cursor />
            </span>
          </p>
        </h1>
        <div className="flex py-10 ">
          <a
            href="https://x.com/JeromeClin25249"
            className="px-5 hover:text-white"
          >
            <AiOutlineTwitter size={40} />
          </a>
          <a
            href="https://www.facebook.com/jerome.clinton.31"
            className="px-5 hover:text-white"
          >
            <AiOutlineFacebook size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/jerome-clinton-12315b335/"
            className="px-5 hover:text-white"
          >
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={hero} alt="hero" />
    </section>
  );
}
