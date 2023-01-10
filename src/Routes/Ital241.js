import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Ital241 = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Sakai",
                        to: "https://sakai.unc.edu/portal/site/0decf497-a84c-4a13-92f0-bc9e77239a0e"
                    },
                    {
                        text: "Sakai",
                        to: "https://sakai.unc.edu/access/content/attachment/0decf497-a84c-4a13-92f0-bc9e77239a0e/Syllabus/ba293d1c-2c64-4fb9-99f3-57b73b68383e/Ital%20241%20Spring%202023%20Veneri%20syllabus.pdf"
                    },
                    {
                        text: "Group Projects",
                        to: "https://docs.google.com/document/d/1PNveAV0CxOTnLdlpFZV1lykqGz8gJjiMJS2b49Teo7I/edit"
                    }
                ]}
            />
            <Footer/>
        </div>
    )
}

export default Ital241
