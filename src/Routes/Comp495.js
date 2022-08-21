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
                        text: "BaseCaSe Github",
                        to: "https://github.com/BaseCS"
                    },
                    {
                        text: "Project Google Drive",
                        to: "https://drive.google.com/drive/folders/1ETxn4x38_yt18gVtLuQmBL_UynZcfLX5"
                    },
                    {
                        text: "Comp 523 Final Project",
                        to: "https://tarheels.live/523teamd/project-concept/"
                    },
                    {
                        text: "Workflowy",
                        to: "https://workflowy.com/s/cs-rankings-base-cas/zPUYmQFuDROaEmrm"
                    },
                    {
                        text: "Learning Contract Manager",
                        to: "https://olcm.oasis.unc.edu/olcm/main/listContracts"
                    },
                    {
                        text: "AWS Console",
                        to: "https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26region%3Dus-east-1%26skipRegion%3Dtrue%26state%3DhashArgsFromTB_us-east-1_c243fab4214ace5b&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=djSzpxXqk-HYjgYAveRj2xIIUbOXu3H5gYhJCjy5Pmk&code_challenge_method=SHA-256"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp421
