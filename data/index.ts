export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: " Actively engaged in online courses, tutorials, and community forums to stay updated",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Passion for creating web and mobile applications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning NextJS with Aceternity Animation library",
    description: "Present",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Feel free to contact me...",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Epalika (E-governance application)",
    des: "Developed using Flutter (GetX) and backend powered by a Node.js server with MongoDB.",
    img: "/epalika.png",
    iconLists: ["/dart.svg", "/flutter.svg", "/javascript.svg", "/node-js.svg", "/mongodb.svg"],
    link: "https://redwire.com.np/epalika/",
  },
  {
    id: 2,
    title: "GlobalChat App (Chatting application)",
    des: "Developed using Flutter (Provider as Statemanagement tool) and Firebase (Firebase Authentication, Firestore Database).",
    img: "/p2.svg",
    iconLists: ["/dart.svg", "/flutter.svg","/firebase.svg"],
    link: "https://github.com/godgiftedboy/GlobalChat-app-Flutter-",
  },
  {
    id: 3,
    title: "iNotebook",
    des: "Cloud Based Notebook (MongoDB, Express, React, Node)",
    img: "/inotebook.png",
    iconLists: ["/mongodb.svg","/express-js.svg","/re.svg", "/node-js.svg", "/javascript.svg"],
    link: "https://github.com/godgiftedboy/inotebook",
  },
  {
    id: 4,
    title: "ADMIN DASHBOARD (Full Stack MERN)",
    des: "Using Material UI, Nivo Charts, Redux, Node JS, Express Js, MongoDB and so on",
    img: "/admindashboard.png",
    iconLists: ["/mongodb.svg","/express-js.svg","/re.svg", "/node-js.svg", "/javascript.svg"],
    link: "https://github.com/godgiftedboy/Admin-panel-MERN",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Flutter Developer Intern",
    desc: "GetX State Management, Interacting with Node js server, Push Notifications using Firebase Cloud Messaging, GetX Localization for cross language app development, Displaying Charts using fl_chart package from pub.dev",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React Web Development",
    desc: "Designed and developed Admin dashboard (CMS) using Material UI creating custom theme.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Searching...",
    desc: "",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/godgiftedboy/"
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/raj-prajapati-98a9602a5/"
  },
];