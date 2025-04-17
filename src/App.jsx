import Aos from "aos";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseItem from "./pages/courses/CourseItem";
import { Course } from "./pages/courses/Course";
import { Contact } from "./pages/contact/Contact";
import Teacher from "./pages/teachers/Teacher";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // animatsiya davomiyligi (ms)
  }, []);
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/course" element={<Course/>}/>
    <Route path="/course/:id" element={<CourseItem/>}/>
    <Route path="/techer" element={ <Teacher/> }/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
