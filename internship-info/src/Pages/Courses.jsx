import React from "react";
import Hero from "../Components/Hero";
import SearchBar from "../Components/SearchBar";
import CourseCard from "../Components/CourseCard";

function Courses() {
  return (
    <main>
      <Hero />
      <SearchBar />
      <CourseCard />
    </main>
  );
}

export default Courses;
