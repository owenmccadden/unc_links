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
                        to: "https://sakai.unc.edu/portal/site/0458d928-ac8c-4572-9108-094d2f3dc6f4/tool/587b277f-6107-4371-bf44-b94e99e16c13/main"
                    },
                    {
                        text: "Fusionetics",
                        to: "https://fusionetics.thinkific.com/courses/take/unc-lifetime-fitness-fall2022-113-407-WtTraining-Hallahan/texts/37529682-introduction-and-overview"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp421
