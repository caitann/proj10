import {
    mobile,
    backend,
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
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "3D Artiist",
      icon: web,
    },
    {
      title: "Art Director",
      icon: mobile,
    },
    {
      title: "Motion Graphics Artist",
      icon: backend,
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
      name: "Redux Toolkit",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Graphic Designer",
      company_name: "Buoyant Services",
      icon:"Buoyant",
      iconBg: "#383E56",
      date: "2023 March - 2023 March",
      points: [
        "Created visually appealing designs for social media posts and marketing materials to promote brand awareness..",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Production Designer",
      company_name: "Short film: Happily Married",
      icon: "Documentary",
      iconBg: "#E6DEDD",
      date: "March 2025",
      points: [
        "As the production designer for the short film, I was responsible for shaping the visual tone and atmosphere of the story. From set design to props and color palettes, I focused on translating the director’s vision into a cohesive visual language that supported the film’s mood and narrative. Every element on screen was designed to reflect the emotions and themes driving the story.",
        "Collaborated closely with the director and cinematographer to align the set design, lighting, and color palette with the film’s emotional tone.",
        "Handled material sourcing and prop styling, ensuring everything on screen matched the film’s period, style, and concept.",
        "Supervised on-set art direction, managing last-minute design adjustments and maintaining visual consistency throughout the shoot.",
      ],
    },
    {
      title: "Art Director",
      company_name: "Short Films: Play,Pause,Pulse; Adrishya Chumarugal(Invisible walls), Veetuchumattukar, Happily Married,Project Z, What Remains After. ",
      icon: "movie",
      iconBg: "#383E56",
      date: "2024 Sept - Present",
      points: [
        "I served as the Art Director for these projects, which was marked by a high level of professionalism and required me to quickly adapt to a new environments. During these times, I managed back-to-back shooting schedules efficiently, ensuring smooth progress. In addition to art direction, I also took on the role of subtitle artist, delivering quality work that the crew appreciated. I was fortunate to be part of this project thanks to the confidence the team had in my previous works.",
      ],
    },
    {
      title: "Title Designer",
      company_name: "Documentary Film: Arippa",
      icon: "Documentary",
      iconBg: "#E6DEDD",
      date: "April 2024",
      points: [
        "Designed and animated the opening title sequence to set the tone and mood of the documentary.",
        "Created lower thirds, captions, and text animations that matched the film’s visual style and theme.",
        "Worked closely with the editor and director to ensure smooth integration of graphics within the storytelling flow.",
        "Focused on maintaining clarity, rhythm, and visual harmony between the motion graphics and the documentary’s footage.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Cait proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Cait does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Cait optimized our website, our traffic increased by 50%. Can't thank them enough.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Robot",
      description:
        "A 3D robot model created using Blender, showcasing advanced modeling and texturing techniques to create a realistic and detailed character.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Solar System AR",
      description:
        "An Augmented REality experience for students to learn about Solar System.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Turbo Machine AR",
      description:
        "An Augmented Reality experience to closely check a turbine machine.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };