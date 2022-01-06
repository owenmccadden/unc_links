import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Mail",
                        to: "https://outlook.office.com/mail/"
                    },
                    {
                        text: "Sakai",
                        to: "https://sakai.unc.edu/welcome/"
                    },
                    {
                        text: "Connect Carolina",
                        to: "https://connectcarolina.unc.edu/"
                    },
                    {
                        text: "Coursicle",
                        to: "https://www.coursicle.com/unc/"
                    },
                    {
                        text: "Davis Registration",
                        to: "https://calendar.lib.unc.edu/reserve/davis-study-rooms"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Home
