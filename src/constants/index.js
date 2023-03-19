import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    oasis,
    mithya,
    threejs,
    todo,
    tailwindcss,
    zomato,
    weather,
    digiclock,
    cp,
  } from "../assets";
  


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  


  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Problem Solver",
      icon: mobile,
    },
    {
      title: "Competitive Programmer",
      icon: cp,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  



  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "React Redux",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  



  const experiences = [
    {
      title: "Web Developer",
      company_name: "Oasis Infobyte ",
      icon: oasis,
      iconBg: "#383E56",
      date: "Feb 2022 - Mar 2022",
      points: [
        "Developing web applications using Javascript and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implementing and submitting level-wise tasks.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Mithya Labs",
      icon: mithya,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  



  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Abhishek proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Abhishek does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Abhishek optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  





  const projects = [
    {
      name: "To-Do-List",
      description:
        "Web-based application that allows users to list down their important tasks for the day. Provided the functionality to delete the tasks which are accomplished.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "router-dom",
          color: "green-text-gradient",
        },
        {
          name: "react-props",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Abhishekjha52/To-Do-List-Using-ReactJs",
    },
    {
      name: "Tesla Landing Page",
      description:
        "Web application designed to introduce the various Tesla car models and encourage visitors to explore further tesla cars and its variety options in cars.",
      tags: [
        {
          name: "tailwind-css",
          color: "blue-text-gradient",
        },
        {
          name: "json",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tailwindcss,
      source_code_link: "https://github.com/Abhishekjha52/TailWind-CSS-Project",
    },
    {
      name: "Zomato Clone",
      description:
        "A static web application clone of a famous food delivery company which showcases my shear expertise in front-end knowledge and can be further optimized by adding backend features to it.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: zomato,
      source_code_link: "https://github.com/Abhishekjha52/zomato-clone",
    },
    {
      name: "Weather Predictor",
      description:
        "Weather predictor application that allows users to enter a location and view the current weather conditions as well as max and min range of temperature in celsius.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/Abhishekjha52/WeatherApp",
    },
    
    {
      name: "Digital Clock",
      description:
        "Created a responsive and user-friendly interface that displays the current time and the clock display format and color scheme are effectively handled for better user experience. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: digiclock,
      source_code_link: "https://github.com/Abhishekjha52/Personal_Projects/tree/main/Digital-Clock",
    },
  ];
  
  export { services, technologies, experiences, projects };