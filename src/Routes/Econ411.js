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
                        text: "Sakai",
                        to: "https://sakai.unc.edu/portal/site/3799033d-333f-482f-8835-e3d02d8bdae3"
                    },
                    {
                        text: "Syllabus",
                        to: "https://sakai.unc.edu/access/content/attachment/3799033d-333f-482f-8835-e3d02d8bdae3/Syllabus/6d84f75f-27af-4fd8-baf9-ee1d572cbe88/E411_FALL22_syllabus.pdf"
                    },
                    {
                        text: "Textbook",
                        to: "https://mathematicalolympiads.files.wordpress.com/2012/08/martin_j-_osborne-an_introduction_to_game_theory-oxford_university_press_usa2003.pdf"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp421
