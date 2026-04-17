import mitigate from "./logo/mitigate.jpg";
import ccit from "./logo/ccit.jpg";
import dl from "./logo/dl.jpg";
import rentalcar from "./logo/rentalcar.jpg";

const articles = [
  {
    name: "react-props-and-styling",
    title: "Understanding React Props and Styling",
    image: mitigate,
    imageAlt: "MitigatePlus dashboard screenshot highlighting disaster risk data",
    imageCaption: "MitigatePlus dashboard visualization for disaster management.",
    content: [
      "Props are read-only values passed from parent to child components. They let you create reusable, flexible UI pieces and manage data flow in React.",
      "You can style components using CSS modules, inline styles, Tailwind utilities, or styled components while keeping styles predictable and maintainable.",
    ],
  },
  {
    name: "react-functional-components",
    title: "React Functional Components",
    image: ccit,
    imageAlt: "CCIT certification badge graphic representing professional development",
    imageCaption: "CCIT certification imagery used to illustrate learning and credentials.",
    content: [
      "Functional components are modern React functions that return JSX. They are easier to read, test, and maintain compared to class components.",
      "Hooks like useState and useEffect let functional components manage state and lifecycle behavior without classes.",
    ],
  },
  {
    name: "react-router-basics",
    title: "React Router Basics",
    image: dl,
    imageAlt: "Digital learning badge image used for navigation and routing concepts",
    imageCaption: "Digital learning badge graphic to represent routing and navigation patterns.",
    content: [
      "React Router enables client-side routing that keeps your app fast and dynamic with URL-driven navigation.",
      "Use BrowserRouter, Routes, Route, and Link to define pages, nested layouts, and navigation inside a single-page app.",
    ],
  },
  {
    name: "car-rental-system",
    title: "Car Rental System",
    image: rentalcar,
    imageAlt: "Car rental platform screenshot showing vehicle listings",
    imageCaption: "Car rental system UI concept for online booking and fleet management.",
    content: [
      "This project showcases a full-featured car rental platform. Users can browse available vehicles, make reservations, and manage bookings with a modern admin dashboard.",
      "Features include JWT authentication, payment integration, real-time availability, and email notifications for seamless user management.",
    ],
  },
];

export default articles;
