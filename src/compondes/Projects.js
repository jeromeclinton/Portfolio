import ecommersImg from "../assets/Screenshot 2024-10-28 164601.jpg";
import usePopcornImg from "../assets/usePopcorn.jpg";
import blog from "../assets/dojo_blog.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center py-20 px-5 text-white bg-primary"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl font-bold border-b-4 border-secondary w-[150px] mb-5">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built these with React.js
            and vanilla CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col md:flex-row px-10 gap-5 ">
          <div className=" relative">
            <img
              className=" h-[200px] w-[500px]"
              src={usePopcornImg}
              alt="foodImg"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                Use Popcorn - Movie Rating App, Built with React.js, OMDB API.
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  target="_blank"
                  href="https://jeromeclinton.github.io/Use_Popcorn/"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className=" h-[200px] w-[500px]"
              src={ecommersImg}
              alt="ecommersImg"
            />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                A Mini-Ecommerce Website. Built with MERN Stack.
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  target="_blank"
                  href="https://github.com/jeromeclinton/mini_ecommerce-website"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className=" h-[200px] w-[500px]" src={blog} alt="blog" />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                Basic Blog Website . Built with React JS and Json.
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  target="_blank"
                  href="https://github.com/jeromeclinton/Dojo-blog-website"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
