import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Econ460 = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Syllabus",
                        to: "https://sakai.unc.edu/access/content/group/9bd224b1-e212-413b-9fcd-3233c044ad88/ECON460Spring2022Syllabus.pdf"
                    },
                    {
                        text: "Zoom",
                        to: "https://unc.zoom.us/j/99579357467"
                    },
                    {
                        text: "PollEv",
                        to: "https://pollev.com/geethav"
                    },
                    {
                        text: "Textbook",
                        to: "https://drive.google.com/file/d/1QYYwpvdN8OjKh-XchIGe4Hm_MvA2jgUR/view"
                    },
                    {
                        text: "Gradescope",
                        to: "https://www.gradescope.com/courses/352035"
                    },
                    {
                        text: "Sakai",
                        to: "https://sakai.unc.edu/portal/site/9bd224b1-e212-413b-9fcd-3233c044ad88"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Econ460
