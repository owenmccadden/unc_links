import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Econ520 = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Course Website",
                        to: "https://lhendricks.org/econ520/econ520.html"
                    },
                    {
                        text: "Canvas",
                        to: "https://uncch.instructure.com/courses/15535"
                    },
                    {
                        text: "Macro Models",
                        to: "https://drive.google.com/drive/u/0/folders/1F-jqaKdL4cHq8wp4Dn_DySyZhjjIKRO1"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Econ520