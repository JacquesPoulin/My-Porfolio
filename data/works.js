const works = [
  {
    id: 1,
    title: "BRILLE",
    img: "/assets/images/brille7.jpg",
    alt: "Image d'un sac à main",
    desc: "Site e-commerce Full-Stack",
    stack1: "/assets/images/svg/react-svgrepo-com.svg",
    stack2: "/assets/images/svg/sass-svgrepo-com.svg",
    stack3: "/assets/images/svg/node-svgrepo-com.svg",
    stack4: "/assets/images/svg/express-svgrepo-com.svg",
    stack5: "/assets/images/svg/typescript-icon-svgrepo-com.svg",
    stack6: "/assets/images/svg/mysql-logo-svgrepo-com.svg",
    techno: "HTML REACT SASS TypeScript NodeJS MySQL Tous tous ALL",
    modalTitle: "BRILLE",
    codingTime: "2 mois",
    status: "status",
    difficulty: " Difficile ",
    backend: "✅",
    state: "in progress",
  },
  {
    id: 2,
    title: "UPSIDE",
    img: "/assets/images/hackathon.jpg",
    alt: "Hackathon wild code school",
    desc: "HACKATHON : App Full-Stack",
    stack1: "/assets/images/svg/react-svgrepo-com.svg",
    stack2: "/assets/images/svg/tailwindcss-icon-svgrepo-com.svg",
    stack3: "/assets/images/svg/node-svgrepo-com.svg",
    stack4: "/assets/images/svg/express-svgrepo-com.svg",
    stack5: "/assets/images/svg/typescript-icon-svgrepo-com.svg",
    stack6: "/assets/images/svg/mysql-logo-svgrepo-com.svg",
    techno: "HTML REACT Tailwind TypeScript NodeJS MySQL Tous tous ALL",
    modalTitle: "BRILLE",
    codingTime: "2 mois",
    status: "",
    demo: "https://upside.vercel.app/",
    codeFront: "https://github.com/JacquesPoulin/Upside",
    codeBack: "https://github.com/JacquesPoulin/upside-back",
    difficulty: " Difficile ",
    backend: "✅",
    state: "in progress",
  },
  {
    id: 3,
    title: "PORTFOLIO",
    img: "/assets/images/myPortfolio.png",
    alt: "",
    desc: "Portfolio de mes projets",
    stack1: "/assets/images/svg/react-svgrepo-com.svg",
    stack2: "/assets/images/svg/tailwindcss-icon-svgrepo-com.svg",
    techno: "REACT SASS Tous tous ALL",
    modalTitle: "Mon Portfolio",
    modalLearnings1: "Events",
    modalLearnings2: "UI / UX",
    modalLearnings3: "Debugging",
    codingTime: "1 mois",
    challenge1: "Responsive",
    challenge2: "Choix de l'UI/ UX",
    status: "",
    code: "https://github.com/JacquesPoulin/My-Porfolio",
    difficulty: "Moyenne",
    backend: "❌",
    state: "finished",
  },

  {
    id: 4,
    title: "STAR TOUR",
    img: "/assets/images/startour2.jpg",
    alt: "Image de vaisseau en train de voler",
    desc: "Application REACT avec appel et gestion d'une API",
    stack1: "/assets/images/svg/react-svgrepo-com.svg",
    stack2: "/assets/images/svg/tailwindcss-icon-svgrepo-com.svg",
    techno: " HTML REACT Tailwind API Tous tous ALL",
    modalTitle: "STAR TOUR AGENCY",
    modalLearnings1: "Appel API",
    modalLearnings2: "Props drilling & context",
    modalLearnings3: "Tailwind CSS",
    modalLearnings4: "Methodologie SCRUM / AGILE",
    modalLearnings5: "PropTypes",
    challenge1: "Responsive",
    challenge2: "Choix de l'UI/ UX",
    challenge3: "Gestion de l'API",
    challenge4: "Méthodologie SCRUM",
    codingTime: "1 mois 1/2",
    status: "",
    demo: "https://star-tour-agency.vercel.app/",
    code: "https://github.com/JacquesPoulin/Star_Tour.git",
    difficulty: "Moyenne",
    backend: "❌",
    state: "finished",
  },
  {
    id: 5,
    title: "LANDAREA",
    img: "/assets/images/landarea2.png",
    alt: "Image d'une femme qui montre sa plante",
    desc: "HACKATHON : application React (pour mobile)",
    stack1: "/assets/images/svg/react-svgrepo-com.svg",
    stack2: "/assets/images/svg/tailwindcss-icon-svgrepo-com.svg",
    techno: "HTML REACT Tailwind Tous tous ALL",
    modalTitle: "",
    modalLearnings1: 'Coder en "mobile first"',
    modalLearnings2: "Filtre",
    modalLearnings3: "Nouvelles méthodes JS",
    challenge1: "Travailler avec un deadline courte",
    challenge2: "Choix de l'UI/ UX",
    challenge3: "Gestion de l'API",
    codingTime: "24 heures",
    status: "",
    demo: "https://landarea.vercel.app/",
    code: "https://github.com/JacquesPoulin/Landarea.git",
    difficulty: "Facile",
    backend: "❌",
    state: "finished",
  },

  {
    id: 6,
    title: "MOVIE FINDER",
    img: "/assets/images/moviefinder1.webp",
    alt: "",
    desc: "App React : bibliothèque de films",
    stack1: "/assets/images/svg/react-svgrepo-com.svg",
    stack2: "/assets/images/svg/sass-svgrepo-com.svg",
    techno: "REACT SASS Tous tous ALL",
    modalTitle: "MOVIE FINDER",
    modalLearnings1: "Evènements",
    modalLearnings2: "Contexte",
    modalLearnings3: "Appel API",
    challenge1: "l'UI en fonction des données récupérées",
    challenge2: "Gestion des favoris",
    challenge3: "Les filtres",
    codingTime: "1 semaine",
    status: "",
    demo: "https://findthemovie.vercel.app/",
    code: "https://github.com/JacquesPoulin/movie-finder",
    difficulty: "Moyenne",
    backend: "❌",
    state: "finished",
  },

  {
    id: 7,
    title: "CENITZ",
    img: "/assets/images/cenitzBG.png",
    alt: "Image d'une table de restaurant avec plat gastronomique",
    desc: "Site web statique et responsive",
    stack1: "/assets/images/svg/html5-simple.svg",
    stack2: "/assets/images/svg/sass-svgrepo-com.svg",
    stack3: "/assets/images/svg/javascript-logo-svgrepo-com.svg",
    techno: "HTML CSS SASS JS vanilla Tous tous ALL",
    modalTitle: "Le CENITZ",
    subTitle: "Premier site codé en HTML / CSS / Javascript",
    modalLearnings1: "Découverte HTML",
    modalLearnings2: "Découverte CSS",
    modalLearnings3: "Découverte VSCode",
    modalLearnings4: "Le travail en équipe projet",
    challenge1: "L'organisation du flow github",
    challenge2: "Gestion d'équipe",
    challenge3: "UI / UX",
    codingTime: "3 semaines",
    status: "",
    demo: "https://jacquespoulin.github.io/Cenitz/",
    code: "https://github.com/JacquesPoulin/Cenitz.git",
    difficulty: "Facile",
    backend: "❌",
    state: "finished",
  },
];

export default works;
