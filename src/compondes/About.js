import about from "../assets/about.png";

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row bg-secondary">
      <div className="py-5 md:w-1/2">
        <img src={about} alt="about" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary w-[170px] font-bold mb-5">
            About me
          </h1>
          <p className="pb-5 px-5">
            Hi, My name is Jerome Clinton. I am a Font-end web developer. I
            built beautiful Websites with React.js , Tailwind CSS.
          </p>
          <p className="pb-5 px-5">
            I am proficient in Frontend skills like React.js, Tailwind CSS
            HTML5, CSS3, JavaScript (ES6+),Git, GitHub many more.
          </p>
        </div>
      </div>
    </section>
  );
}
