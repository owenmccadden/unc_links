import React from 'react'

// Components
import NavBar from '../Components/NavBar'
import Course from '../Components/Course';
import Footer from '../Components/Footer';

const Comp590 = () => {
    return (
        <div>
            <NavBar />
            <Course
                links={[
                    {
                        text: "Class Site",
                        to: "https://www.cs.unc.edu/~saba/pets_class/"
                    },
                    {
                        text: "Gradescope",
                        to: "https://www.gradescope.com/courses/322998"
                    },
                    {
                        text: "Syllabus",
                        to: "https://www.cs.unc.edu/~saba/pets_class/Syllabus.pdf"
                    },
                    {
                        text: "Zoom",
                        to: "https://unc.zoom.us/j/96230557166?pwd=bEZnMmg0UFgzS0YwWGJUUG1icG12dz09"
                    },
                    {
                        text: "Google Drive",
                        to: "https://drive.google.com/drive/folders/1v6lMTc_CIusjxufZpzOqlgzgNhPKCa4t"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp590
