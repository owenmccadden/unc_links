import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Comp555 = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Course Site",
                        to: "http://www.csbio.unc.edu/mcmillan/index.py?run=Courses.Comp555S22"
                    },
                    {
                        text: "Zoom",
                        to: "https://unc.zoom.us/j/92730186484"
                    },
                    {
                        text: "Syllabus",
                        to: "http://www.csbio.unc.edu/mcmillan/Comp555S22/Syllabus.pdf"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp555
