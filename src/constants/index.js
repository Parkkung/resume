import { css, cSharp, django, docker, figma, firebase, git, html, js, mongoDB, mySQL, nextjs, nodejs, python, reactjs, reduxjs, tailwind, vitejs } from "../assets/logo";
import { experience1, experience2, experience3, experience4, cryptian, orun, nike, photograph } from "../assets/images";


export const navLinks = [
    { index: 1, href: "#home", label: "Home" },
    { index: 2, href: "#about", label: "About" },
    { index: 3, href: "#resume", label: "resume" },
    { index: 4, href: "#portfolio", label: "Portfolio" },
];


export const languages = [

    { index: 1, src: css, alt:'css' },
    { index: 2, src: html, alt:'html' },
    { index: 3, src: js, alt:'js' },
    { index: 4, src: python, alt:'python' },
    { index: 5, src: cSharp, alt:'cSharp' },
    { index: 6, src: nodejs, alt:'node' },
    { index: 7, src: vitejs, alt:'vite' },
    { index: 8, src: firebase, alt:'firebase' },
    { index: 9, src: figma, alt:'figma' },    
]

export const frameworks = [
    { index: 1, src: reactjs, alt:'reactjs' },
    { index: 2, src: reduxjs, alt:'reduxjs' },
    { index: 3, src: nextjs, alt:'nextjs' },
    { index: 4, src: django, alt:'django' },
    { index: 5, src: tailwind, alt:'tailwind' },
]

export const databases = [
    { index: 1, src: mongoDB, alt:'mongoDB' },
    { index: 2, src: mySQL, alt:'mySQL' },
]

export const others = [
    { index: 1, src: docker, alt:'docker' },
    { index: 2, src: git, alt:'git' },
]

export const projectCard = [
    { name: orun, id: 1, url: "https://github.com/Parkkung/O-run-"},
    { name: cryptian, id: 2, url: "https://github.com/mark47546/Cryptians"},
    { name: photograph, id: 3, url: "https://apipark-photograph.netlify.app/"},
    { name: nike, id: 4, url: "https://park-nike-clone.netlify.app/"},
]


export const experienceCard = [
    { url: experience1, title: "Exceed Camp", des: "Frontend Developer", date: "9/72019-15/7/2019"},
    { url: experience2, title: "SOS Camp", des: "Teacher assistant", date: "24/9/2019-28/9/2019"},
    { url: experience3, title: "Exceed Camp", des: "Group mentor", date: "30/1/2021-31/1/2021"},
    { url: experience4, title: "NTi Internship", des: "Intern", date: "1/6/2021-3/12/2021"},
]