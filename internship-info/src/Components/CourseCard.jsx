import React from "react";
import "../Styles/courseCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import { sampleCourses } from "./Catagory/Catagory";
import { Link } from "react-router-dom";

// const sampleCourses = [
//   {
//     id: '1',
//     title: 'Full Stack Web Development Bootcamp',
//     instructor: 'Lidetu Tadesse',
//     level: 'Intermediate',
//     duration: '12 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
//     rating: 4.9,
//     enrolled: 3124,
//     category: 'Web Development'
//   },
//   {
//     id: '2',
//     title: 'Practical Machine Learning',
//     instructor: 'Bereket Tesfaye Kebede',
//     level: 'Advanced',
//     duration: '10 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
//     rating: 4.8,
//     enrolled: 1742,
//     category: 'Data Science'
//   },
//   {
//     id: '3',
//     title: 'UI/UX Design for Modern Products',
//     instructor: 'Hana Alemayehu',
//     level: 'Beginner',
//     duration: '8 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
//     rating: 4.7,
//     enrolled: 2891,
//     category: 'Design'
//   },
//   {
//     id: '4',
//     title: 'Cloud Engineering with AWS',
//     instructor: 'Samuel Getachew',
//     level: 'Intermediate',
//     duration: '9 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
//     rating: 4.6,
//     enrolled: 2015,
//     category: 'Cloud Computing'
//   },
//   {
//     id: '5',
//     title: 'Mobile App Development with Flutter',
//     instructor: 'Natnael Desta',
//     level: 'Intermediate',
//     duration: '10 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
//     rating: 4.8,
//     enrolled: 2563,
//     category: 'Mobile Development'
//   },
//   {
//     id: '6',
//     title: 'Cybersecurity Foundations',
//     instructor: 'Meklit Girma',
//     level: 'Beginner',
//     duration: '6 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
//     rating: 4.7,
//     enrolled: 1489,
//     category: 'Security'
//   },
//   {
//     id: '7',
//     title: 'Data Analytics with Python',
//     instructor: 'Abel Hailu',
//     level: 'Beginner',
//     duration: '7 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
//     rating: 4.8,
//     enrolled: 2674,
//     category: 'Data Science'
//   },
//   {
//     id: '8',
//     title: 'Blockchain & Fintech Systems',
//     instructor: 'Yonas Bekele',
//     level: 'Advanced',
//     duration: '11 weeks',
//     thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
//     rating: 4.5,
//     enrolled: 1321,
//     category: 'Blockchain'
//   }
// ]

function CourseCard() {
  return (
    <section className="courses-section">
      <div className="showing">
        <p>
          Showing {sampleCourses.length} of {sampleCourses.length} courses
        </p>
      </div>

      <div className="courses-grid">
        {sampleCourses.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="course-link"
          >
            <article className="course-card">
              <div className="card-image-wrap">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="course-image"
                />
                <span
                  className={`level-chip level-${course.level.toLowerCase()}`}
                >
                  {course.level}
                </span>
              </div>

              <div className="card-body">
                <div className="course-category">{course.category}</div>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-instructor">
                  Instructor: {course.instructor}
                </div>
              </div>

              <div className="card-footer">
                <div className="meta">
                  <span className="meta-item">
                    <AccessTimeIcon className="meta-icon" />
                    <span className="meta-text">{course.duration}</span>
                  </span>
                  <span className="meta-item">
                    <GroupIcon className="meta-icon" />
                    <span className="meta-text">
                      {course.enrolled.toLocaleString()}
                    </span>
                  </span>
                </div>

                <div className="rating">
                  <div className="star-img-wrapper">
                    <StarIcon className="star-icon" />
                  </div>
                  <span className="rating-value">{course.rating}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CourseCard;
