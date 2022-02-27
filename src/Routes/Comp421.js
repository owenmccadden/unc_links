import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Comp421 = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Zoom",
                        to: "https://unc.zoom.us/j/93571832546"
                    },
                    {
                        text: "Syllabus",
                        to: "https://cdn-uploads.piazza.com/paste/h6k646t385q2rg/27d84289b8276cbb90151bbaab06ba18defb27189ab4585214a6d9db3eb67c58/Syllabus.pdf"
                    },
                    {
                        text: "Piazza",
                        to: "https://piazza.com/class/ky6anz9ocho50m?cid=9"
                    },
                    {
                        text: "Sakai",
                        to: "https://sakai.unc.edu/portal/site/3f59b621-c2ed-4988-bccd-583cc4f8aaea"
                    },
                    {
                        text: "MySQL Hosting",
                        to: "https://www.freemysqlhosting.net/"
                    },
                    {
                        text: "PHP My Admin",
                        to: "https://www.phpmyadmin.co/"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp421
