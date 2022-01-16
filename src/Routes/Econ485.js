import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Econ485 = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Syllabus",
                        to: "https://sakai.unc.edu/access/lessonbuilder/item/3325025/group/e7a457be-cc48-4a6b-b0a5-ab8e5a21243e/Syllabus/Syllabus%20for%20ECON%20485.002.pdf"
                    },
                    {
                        text: "Zoom",
                        to: "https://unc.zoom.us/j/949953760"
                    },
                    {
                        text: "Sakai",
                        to: "https://sakai.unc.edu/portal/site/e7a457be-cc48-4a6b-b0a5-ab8e5a21243e"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Econ485
