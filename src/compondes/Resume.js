import resume from "../assets/resume.jpg";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5"
    >
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]" src={resume} alt="resume" />
      </div>
      <div className="flex md:w-1/2 justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="font-bold text-4xl border-b-4 mb-5 w-[140px] border-primary">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume{"  "}
            <a className="btn" target="_blank" href="https://pdf.ac/49ABJ1">
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
