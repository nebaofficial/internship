import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import StarIcon from '@mui/icons-material/Star'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { sampleCourses } from '../Components/Catagory/Catagory'
import '../Styles/courseDetail.css'

function CourseDetail(){
  const { id } = useParams()
  const course = sampleCourses.find(c => c.id === id)

  if(!course) return <div style={{padding:20}}>Course not found.</div>

  return (
    <div className='course-detail'>
      <div className='top-row'>
        <Link to="/courses" className='back-link'><ArrowBackIcon className='back-icon'/> Back to Courses</Link>
      </div>
      <header className='course-hero' style={{background: 'linear-gradient(90deg,#ff7a00,#ff4b00)'}}>
        <div className='hero-inner'>
          <div className='hero-text'>
            <div className='hero-category'>{course.category}</div>
            <h1 className='hero-title'>{course.title}</h1>
            <p className='hero-sub'>{course.description}</p>
            <div className='hero-meta'>
              <span className='meta-item'>
                <PersonIcon className='meta-icon' />
                <span>Instructor: <strong>{course.instructor}</strong></span>
              </span>

              <span className='meta-item'>
                <AccessTimeIcon className='meta-icon' />
                <span>{course.duration}</span>
              </span>

              <span className='meta-item'>
                <GroupIcon className='meta-icon' />
                <span>{course.enrolled.toLocaleString()} enrolled</span>
              </span>

              <span className='meta-item'>
                <StarIcon className='meta-icon' />
                <span>{course.rating} rating</span>
              </span>
            </div>
          </div>
          <div className='hero-image'>
            <img src={course.thumbnail} alt={course.title} />
          </div>
        </div>
      </header>

      <div className='course-content'>
        <section className='main-col'>
          <div className='card learn-card'>
            <h3>What You'll Learn</h3>
            <ul className='skills-list'>
              {course.skills && course.skills.map(s => (
                <li key={s}>
                  <CheckCircleIcon className='skill-icon' fontSize='small' htmlColor="#10b981" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='card desc-card'>
            <h3>Course Description</h3>
            <p>{course.description}</p>
          </div>

          <div className='card instructor'>
            <h3>Your Instructor</h3>
            <div className='instr-body'>
              <div className='instr-avatar'>{course.instructor.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
              <div>
                <strong>{course.instructor}</strong>
                <p className='instr-sub'>Expert Cloud Computing professional with over 10 years of industry experience. Passionate about teaching and helping students achieve their career goals.</p>
              </div>
            </div>
          </div>
        </section>

        <aside className='side-col'>
          <div className='enroll-box card'>
            <h4>Enroll Today</h4>
            <p className='muted'>Join {course.enrolled.toLocaleString()} students already enrolled</p>
            <button className='primary'>Enroll Now</button>
            <button className='ghost'>Add to Wishlist</button>

            <div className='includes'>
              <h5>This course includes:</h5>
              <ul>
                <li>9 weeks of content</li>
                <li>Lifetime access</li>
                <li>Certificate of completion</li>
                <li>Access on mobile and desktop</li>
                <li>Downloadable resources</li>
              </ul>
            </div>
          </div>

        </aside>
      </div>

    </div>
  )
}

export default CourseDetail
