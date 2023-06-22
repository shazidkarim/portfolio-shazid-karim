import "./portfolio.css";

import img11 from '../../assets/language learning(thumbnail).PNG';
import img22 from '../../assets/teampico website(thumbnail).PNG';
import img44 from '../../assets/toy shop website(thumbnail).PNG';
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Language Learning School",
      img: img11,
      description: "The website is built using React and focuses on language learning. Students can easily find their desired language courses on the website.Additionally, there is a Popular Instructors section highlighting the best instructors. The website supports three different user roles: normal users (defaulted as students), admin users, and instructor users. Admin users can review and modify classes, while instructors can add new classes. Each user role has a distinct dashboard. Users can enroll in classes, make payments, and gain access to purchased classes. Payment history is stored in a dedicated section.",
      technologies: "Html | CSS | Javascript | React Js | Mongodb | Firebase | Express",
      link: "https://summer-camp-ed1e8.web.app/",
      github: "https://github.com/shazidkarim/language-learning-school-client-side",
    },
    {
      id: 2,
      title: "Toy Shop Website",
      img: img44,
      description:
        " This is an exclusive doll based website.In the home page several components are rendered. I am using react routing to navigate from one page to another.There are 3 different categories of dolls so that users can easily find their expected doll toy.There are several nav options in this website and without sign in/login they can not see these options.I am implementing firebase authentication to authenticate user.After login, users are allowed to visit and buy all the toys they chose.However a user can add a toy and display the toy in the all toys section.They can also update a toy and delete a toy.",
      technologies: "ReactJS | React responsive modal | Daisy UI | Firebase | React tabs | MongoDB | NodeJS.",
      link: "https://toy-marketplace-b333f.web.app/",
      github: "https://github.com/shazidkarim/toy-shop-client-side",
    },
    {
      id: 3,
      title: "Teampico Website",
      img: img22,
      description: "This website is focused on front end design. There are several sections that implement what we do in this website.User can explore more about our website.There is a section called our projects.In here users can see our latest projects.All the projects are sorting by their category. At the bottom of the website we implement a counter system using the JQuery library. this website still on development so please do not misunderstand. firebase authentication and authorization still on processing and router system also.",
      technologies: "  HTML5 | Vanilla CSS | JQuery | Owl carousel.",
      link: "https://shazidkarim.github.io/teampico-xd-file/?",
      github: "https://github.com/shazidkarim/teampico-xd-file",
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
