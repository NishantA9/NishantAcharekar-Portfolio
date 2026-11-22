export const profile = {
  name: "Nishant Acharekar",
  photo: "/images/nish5.jpg",
  roles: ["Software Engineer", "UI/UX Designer", "Video Editor", "Content Creator", "Web Developer", "Graphic Designer"],
  about:
    "Software Engineer with 3+ years of experience building enterprise web applications," +
    " financial reporting systems, and data-driven solutions using Python, C#, ASP.NET MVC," +
    " JavaScript, SQL Server, React, and PostgreSQL. Also 6+ years as a graphic designer, video editor," +
    " and content creator since 2016, running the FireEmperor YouTube channel (400+ videos," +
    " 2K+ subscribers) and designing thumbnails, overlays, and edits in Photoshop," +
    " Premiere Pro, and After Effects. I enjoy combining engineering and design to build" +
    " products that work well and look great.",  
  resume: "https://drive.google.com/file/d/1d-tNtzC5vdSFIFwtf57LI3ceQcDVVSC1/view?usp=sharing",
  email: "acharekarnishant9@gmail.com",
  social: {
    youtube: "https://www.youtube.com/@FireEmperor",
    github: "https://github.com/NishantA9",
    linkedin: "https://www.linkedin.com/in/nishantacharekar/",
    instagram: "https://www.instagram.com/fire_guardian9/",
    x: "https://x.com/fireemperor9",
  },
};

export const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "jQuery", icon: "SiJquery" },
      { name: "WordPress", icon: "SiWordpress" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Rest APIs", icon: "SiApollographql" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "ASP.NET MVC", icon: "SiDotnet" },
      { name: "C#", icon: "SiCsharp" },
      { name: "Python", icon: "SiPython" },
      { name: "Flask", icon: "SiFlask" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "SQL Server" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Graphic Design & Video",
    items: [
      { name: "Photoshop", icon: "SiAdobephotoshop" },
      { name: "Illustrator", icon: "SiAdobeillustrator" },
      { name: "Premiere Pro", icon: "SiAdobepremierepro" },
      { name: "After Effects", icon: "SiAdobeaftereffects" },
      { name: "Lightroom", icon: "SiAdobelightroom" },
      { name: "Canva", icon: "SiCanva" },
      { name: "Sony Vegas" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "AWS", icon: "SiAmazonaws" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Netlify", icon: "SiNetlify" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
      { name: "NPM", icon: "SiNpm" },
      { name: "Ubuntu", icon: "SiUbuntu" },
    ],
  },
];

export const experience = [
    {
    role: "Streamer & Content Creator",
    company: "Rebecca Everlene Trust Company",
    place: "Remote, India",
    date: "Dec 2016 – Present",
    logo: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/LOGO.png",
    points: [
    "Produced 400+ videos and managed a gaming-focused YouTube channel, reaching 300K+ views and 2K+ subscribers.",
    "Planned content, edited videos, and handled publishing and live streaming alongside academic and professional work."
    ],
    skills: ["Premiere Pro", "After Effects", "Photoshop", "Content Creation", "Graphic Designer", "Photo Editing", "Gaming", "Commentary", "YouTube", "Video Editing", "SEO"],
  },
  {
    role: "Web Developer",
    company: "Rebecca Everlene Trust Company",
    place: "Chicago, IL, USA",
    date: "Jul 2025 – Jul 2026",
    logo: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/rebecca.png",
    points: [
      "Translated 75+ Figma designs into production-ready, responsive web pages.",
      "Built reusable WordPress components and a transit portal that displays routes by state and system.",
      "Researched, validated and cleaned 10,000+ public transit records using Excel and SQL.",
      "Standardized GitHub-based deployment workflows across the team.",
    ],
    skills: ["WordPress", "JavaScript", "Figma", "Git", "Power BI", "Excel", "CSS", "Responsive Design", "GitHub", "Web Development"],
  },
  {
    role: "Graduate Teaching Assistant",
    company: "UNC Charlotte",
    place: "Charlotte, NC, USA",
    date: "Jun 2024 – May 2025",
    logo: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/uncc_logo.png",
    points: [
      "Mentored 40 students on system design, database design and full-stack development.",
      "Reviewed UML diagrams, schemas and Figma prototypes, reducing rework.",
      "Designed a high-fidelity Figma prototype for a campus admissions portal, adopted by 200+ students.",
    ],
    skills: ["Mentoring", "System Design", "UML", "Figma", "Programming"],
  },
  {
    role: "Software Engineer",
    company: "Nelito Systems Pvt. Ltd.",
    place: "Mumbai, India",
    date: "Jul 2022 – Jul 2023",
    logo: "https://bfsi.eletsonline.com/wp-content/uploads/2018/05/nelito.jpg",
    points: [
      "Built enterprise reporting modules for Punjab & Sind Bank's Fin-DART platform using C#, ASP.NET MVC and SQL Server.",
      "Generated PDF, Excel and Word exports with ClosedXML and iTextSharp.",
      "Optimized SQL queries and stored procedures, improving report performance by 15%.",
    ],
    skills: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "HTML", "CSS", "Bootstrap", "Oracle"],
  },
  {
    role: "Web Development Intern",
    company: "The Sparks Foundation",
    place: "Remote, Singapore",
    date: "Oct 2021 – Nov 2021",
    logo: "https://logodix.com/logo/501874.png",
    points: [
      "Built a donation portal with Node.js, HTML, CSS and JavaScript, integrating Razorpay.",
    ],
    skills: ["Node.js", "Razorpay", "Figma", "HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    role: "Data Scientist Intern",
    company: "Dezignolics Web & Software Solutions",
    place: "Thane, India",
    date: "Feb 2021 - Mar 2021",
    logo: "https://getmap.co.id/assets/img/divisions/getdesign.jpg",
    points: [
    "Analyzed 10,000+ data points using Python to identify trends and built Power BI dashboards to communicate insights to stakeholders.",
    ],
    skills: ["Python", "Pandas", "Power BI", "Data Cleaning", "Data Visualization"],
  },
  {
    role: "Graphic Design Intern",
    company: "Rotaract Club of KC",
    place: "Thane, India",
    date: "Sep 2020 - Oct 2020",
    logo: "https://img.jagranjosh.com/images/2022/June/662022/27545183_565788393830264_1612251284821766020_n.png",
    points: [
    "Produced social media graphics with Adobe Photoshop and Premiere Pro, boosting college engagement.",
    ],
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
];

export const education = [
  {
    school: "University of North Carolina at Charlotte",
    degree: "M.S. Information Technology",
    date: "Aug 2023 – May 2025",
    grade: "GPA 3.90",
    logo: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/uncc_logo.png",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Information Technology",
    date: "Aug 2018 – May 2022",
    grade: "GPA 3.60",
    logo: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/univ_mum.jpg",
  },
];

export const projects = [
  {
    title: "Coca-Cola Drink Page",
    category: "Web App",
    date: "Nov 2026",
    desc: "A Figma-based design concept for a Coca-Cola drink page, showcasing a modern and user-friendly interface with interactive elements and visual appeal.",
    image: "/images/coco-colaPrj-nish.png",
    link: "https://www.figma.com/design/MrZerW7fr3IDwKAyGzZBIA/Coco-Cola-drink-page-concept---Nishant-Acharekar?node-id=0-1&t=LHTN6IAl5yM6Bjs2-1",
  },
  {
    title: "Nishant Acharekar Portfolio Version 2",
    category: "Web App",
    date: "Nov 2026",
    desc: "A Portfolio website (V2) built with React & Claude, showcasing my skills, experience, and projects in a visually appealing and interactive manner.",
    image: "/images/NishantP2.png",
    link: "https://github.com/NishantA9/NishantAcharekar-Portfolio",
  },
  {
    title: "Nishant Acharekar Portfolio Version 1",
    category: "Web App",
    date: "Aug 2024",
    desc: "A Portfolio website built with React, showcasing my skills, experience, and projects in a visually appealing and interactive manner.",
    image: "/images/NishantP1.png",
    link: "https://github.com/NishantA9/NishantAcharekar-Portfolio-v1",
  },
  {
    title: "Manga-Kun Reviews",
    category: "Web App",
    date: "Feb 2026",
    desc: "Book review platform built with React, Supabase (PostgreSQL), authentication, search and Vercel deployment.",
    image: "/images/manga.png",
    link: "https://nishant-manga-kun-reviews.vercel.app/",
  },
  {
    title: "1Fi Marketplace",
    category: "Web App",
    date: "Aug 2026",
    desc: "A full-stack marketplace feature built for the 1Fi Shop page, browse smartphones and buy them on EMI plans backed by mutual funds, without liquidating investments.",
    image: "/images/1f1.png",
    link: "https://1fi-marketplace-kappa.vercel.app/",
  },
  {
    title: "Ajaia Docs",
    category: "Web App",
    date: "Oct 2026",
    desc: "Collaborative document editor with rich-text formatting, autosave and .txt / .md export.",
    image: "/images/ajaia-docs-nishant.png",
    link: "https://ajaia-docs-h1cs.onrender.com/",
  },
  {
    title: "UNCC High Fidelity Prototype",
    category: "Web App",
    date: "Jan 2025",
    desc: "A High Fidelity Prototype representing some unique and necessary changes in UNC Charlotte's Admissions & Financial Aid Website made in FIGMA.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/UNCC_Figma.png",
    link: "https://www.figma.com/design/JPFziWrO16tuKkxboyGlwd/Nishant-High-Fidelity-Website---UNCC-Admissions-%26-Financial-Aid-Project?node-id=0-1&t=LuGQRrFKtFuboz2y-1",
  },
  {
    title: "A Blog on Unexplored Forts of Maharashtra",
    category: "Web App",
    date: "Nov 2020",
    desc: 
      "My First Web Development Project. It is a blog website that contains information about the unexplored forts of Maharashtra. It is made with HTML, CSS, JavaScript, and Bootstrap. It is a responsive website that has a contact form where users can contact me.",
    image: "https://www.globetrove.com/wp-content/uploads/2018/01/Pratapgad-fort-featured.jpg",
    link: "https://github.com/NishantA9/Killa",
  },
  {
    title: "Crypto Dunks",
    category: "Web App",
    date: "Jul 2024",
    desc: 
      "This project is built using the Internet Computer (IC) framework, leveraging Motoko for smart contracts and React for the frontend. The main functionality revolves around minting, listing, and transferring Non-Fungible Tokens (NFTs) in a decentralized manner.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/crypto.png",
    link: "https://github.com/NishantA9/CryptoDunk-OpenD",
  },
  {
    title: "React Keeper App",
    category: "Web App",
    date: "Jun 2024",
    desc: 
    "It's a web application that allows users to create, display, and delete notes, much like a simplified version of Google Keep.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/keeper.png",
    link: "https://codesandbox.io/p/sandbox/using-pre-built-react-components-completed-forked-yrlql5?file=%2Fsrc%2Findex.js",
  },
  {
    title: "Website Collection",
    category: "Web App",
    date: "Aug 2024",
    desc: 
      "A Collection of Front End Websites that are live and hosted. All the websites are made with various front-end technologies.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/webcollection.png",
    link: "https://nishanta9.github.io/NishWebProj/",
  },
  {
    title: "Backend Projects",
    category: "Machine Learning",
    date: "Aug 2024",
    desc: 
    "A Collection of Backend Projects which contains some Python Scripts and Java and C++ Project codes.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/backend.png",
    link: "https://nishanta9.github.io/NishBackEndProj/",
  },
  {
    title: "Electronic-Medical-Record-System-Database-Based-On-Dermatology-Clinic",
    category: "Machine Learning",
    date: "Apr 2024",
    desc: "This Project contains a Database of Patients and Doctors of a Dermatology Clinic. It has a User authentication and is run on a local server. It uses Jypter Notebook, Python and MySQL.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/emr.jpg",
    link: "https://github.com/NishantA9/Electronic-Medical-Record-System-Database-based-on-Dermatology-Clinic",
  },
  {
    title: "Emotion-Based Music AI",
    category: "Machine Learning",
    date: "Dec 2023",
    desc: "A emotion Based Music AI application which captures your face and detects the emotion, according to the detected emotion it will recommend songs on youtube. Made with Python, uses Keras, CV2 and other models.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/emotionbasedmusicai.png",
    link: "https://github.com/NishantA9/Emotion-Based-Music-AI",
  },
  {
    title: "Image AI",
    category: "Machine Learning",
    date: "Jul 2024",
    desc: "This project demonstrates how to use the ImageAI library with the MobileNetV2 model for image classification. It involves setting up the environment, loading the pre-trained MobileNetV2 model, and classifying an image.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/imageAi.jpg",
    link: "https://github.com/NishantA9/ML-ImageAI",
  },

  {
    title: "Weather Website",
    category: "Web App",
    date: "Jun 2024",
    desc: "This project is built with Express JS, NodeJs, HTML, CSS & JS. It also uses OpenWeatherApi which calls and helps us to display the weather of that Specific location. So you need to go to OpenWeatherApi website and generate your own api key and paste it in app.js",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/weather.png",
    link: "https://github.com/NishantA9/WeatherChecker",
  },
  {
    title: "Permalist Website",
    category: "Web App",
    date: "May 2024",
    desc: "Permalist is a to-do list application that allows users to organize tasks into different lists. Built with Express, EJS, and PostgreSQL, this project demonstrates how to create a full-stack application with CRUD functionalities. Users can create new lists, add items, edit existing items, and delete them.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/permalist.png",
    link: "https://github.com/NishantA9/Permalist",
  },
  {
    title: "Android Chat App",
    category: "Android App",
    date: "Nov 2023",
    desc:"Chat Application with FireBase authentication, where user can chat with another user. An App Developed in Android Studio, Java as the language code",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/chatapp.png",
    link: "https://github.com/NishantA9/Android-Chat-App",
  },
  {
    title: "Weather App",
    category: "Android App",
    date: "Oct 2023",
    desc: "A Weather ForeCast App using JAVA and HTTPS (POSTMAN) in Android Studio. With Weather Api code",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/weatherapp.png",
    link: "https://github.com/NishantA9/Weather-Forecast-App",
  },
  {
    title: "Todo App",
    category: "Android App",
    date: "Sep 2023",
    desc:"A Simple ToDoList Project with Java made in Android Studio",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/todo.png",
    link: "https://github.com/NishantA9/ToDoList",
  },

  {
    title: "Calculator App",
    category: "Android App",
    date: "Aug 2023",
    desc: "A Calculator App using Java made in Android Studio",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/calc.jpg",
    link: "https://github.com/NishantA9/Calculator-App",
  },
  {
    title: "FastnFitness App",
    category: "Android App",
    date: "Sep 2021",
    desc: "A android app made with Java and Firebase. This is a clone of Fast and Fitness App. Our App is also fitness app that has a login and signup page. It has a BMI calculator, a calorie calculator, and a workout plan.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/fastnfitness.png",
    link: "https://github.com/NishantA9/fastnfitness",
  },
  {
    title: "(OLD) Manga-Kun",
    category: "Web App",
    date: "Jul 2024",
    desc: "This project is a book collection application built with Node.js, Express, and PostgreSQL. The application allows users to add, view, edit, and delete books from their collection. Each book entry includes details like the ISBN, author, title, description, rating, and the date it was read. Additionally, the application fetches and displays book covers from the Open Library API.",
    image: "https://raw.githubusercontent.com/NishantA9/portfolio-images/refs/heads/main/manga_kun.png",
    link: "https://github.com/NishantA9/old-manga-kun",
  },

];

export const creative = [
  // Overlays
  { title: "Ganesh-Darshan-Invitation-Card", category: "Overlays", image: "/images/ov9.png" },
  { title: "FITISTAN-Poster-Assignment", category: "Overlays", image: "/images/ov10.png" },
  { title: "Market-Wolf Design", category: "Overlays", image: "/images/ov11.png" },
  { title: "Stream Overlay 1", category: "Overlays", image: "/images/ov1.png" },
  { title: "Stream Overlay 2", category: "Overlays", image: "/images/ov2.png" },
  { title: "Vtuber Art 1 - Main", category: "Overlays", image: "/images/ov5.png" },
  { title: "Vtuber Art 2", category: "Overlays", image: "/images/ov7.png" },
  { title: "Character Art", category: "Overlays", image: "/images/ov6.png" },
  { title: "Banner Art YouTube", category: "Overlays", image: "/images/ov8.png" },
  { title: "Logo-1", category: "Overlays", image: "/images/ov3.png" },
  { title: "Logo-2", category: "Overlays", image: "/images/ov4.png" },

  // Thumbnails
  { title: "Genshin Impact Event Thumbnail", category: "Thumbnails", image: "/images/tb1.png" },
  { title: "Valorant Thumbnail", category: "Thumbnails", image: "/images/tb2.png" },
  { title: "Genshin Archon Quest Thumbnail", category: "Thumbnails", image: "/images/tb3.png" },
  { title: "Genshin Impact Banner Thumbnail 2", category: "Thumbnails", image: "/images/tb4.png" },
  { title: "Genshin Impact Thumbnail", category: "Thumbnails", image: "/images/tb5.png" },
  { title: "Genshin Impact FE X Mizuki X Faruzan Thumbnail", category: "Thumbnails", image: "/images/tb6.png" },
  { title: "Genshin Impact Banner Thumbnail 1", category: "Thumbnails", image: "/images/tb7.png" },
  { title: "Genshin Impact Beidou Thumbnail", category: "Thumbnails", image: "/images/tb8.png" },
  { title: "Genshin Impact FE X Furina Thumbnail", category: "Thumbnails", image: "/images/tb9.jpg" },
  { title: "Genshin Impact FE X Mavuika Thumbnail", category: "Thumbnails", image: "/images/tb10.jpg" },
  { title: "Genshin Impact FE X Vodynitsa X Vesna Thumbnail", category: "Thumbnails", image: "/images/tb11.jpg" },

  // Video edits (plays inline on image click, opens YouTube on card click)
  { title: "YT-Short-Edit", category: "Video Edits", youtube: "https://www.youtube.com/shorts/wxHoxyao4bQ" },
  { title: "Valorant-Short", category: "Video Edits", youtube: "https://www.youtube.com/shorts/8hklL9PyBTQ" },
  { title: "Valorant-Short-2", category: "Video Edits", youtube: "https://www.youtube.com/shorts/Q8eEW5y2bAk" },
  { title: "YT-Short-highest-dmg", category: "Video Edits", youtube: "https://www.youtube.com/shorts/cG5eqF9Epnw" },
  { title: "First-Intro-MadeinPR", category: "Video Edits", youtube: "https://www.youtube.com/watch?v=o4EEavQiUMc" },
  { title: "Livestream-Overlay", category: "Video Edits", youtube: "https://www.youtube.com/watch?v=Ki_a0Q5PhzU" },
  { title: "Most-Watched-Video", category: "Video Edits", youtube: "https://www.youtube.com/watch?v=C99FnpMsSmI" },
  { title: "Pokemon-Overlay-Template-In-Video-Live", category: "Video Edits", youtube: "https://www.youtube.com/watch?v=ENng3-Xwv3k" },
];