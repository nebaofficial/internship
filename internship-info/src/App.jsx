import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Hero from "./Components/Hero";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Hero />
            <SearchBar /> */}
              <Courses />
            </>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
