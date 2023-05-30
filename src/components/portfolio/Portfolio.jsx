import "./portfolio.css";

import IMG1 from "../../assets/toy-car.png";
import IMG2 from "../../assets/school.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/7news.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Toy CarMania With React",
      img: IMG1,
      description: "oy CarMania is an engaging toy car website that allows users to explore, add, delete, and update toy car models. It combines front-end technologies like React with MongoDB for efficient data management.",
      technologies: "Html | CSS | Javascript | React Js | Mongodb | Firebase | Express",
      link: "https://assignment-11-1f233.web.app/",
      github: "#",
    },
    {
      id: 2,
      title: "7News-Newspaper Website",
      img: IMG4,
      description:
        "7News is a real-time news portal that offers a user-friendly  interface and is news delivery, secure authentication, and seamless navigation, 7News provides an immersive reading experience  for its users",
      technologies: "React | Mongodb | Firebase | Express",
      link: "https://lovely-sunflower-27c14a.netlify.app/",
      github: "#",
    },
    {
      id: 3,
      title: "School Management System",
      img: IMG2,
      description: "Welcome to our School Management System, where efficiency meets education. Our user-friendly interface allows students, teachers, and administrators to effortlessly navigate through academic records, attendance tracking, and communication channels.",
      technologies: "Html | CSS | Boostrap",
      link: "https://slsuyel.github.io/school/",
      github: "#",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "",
      github: "",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "",
      github: "",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "",
      github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
