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
                        to: "https://sakai.unc.edu/portal/site/8a9e886a-f4ae-4dad-818d-2e858cda6eda/tool/b8559099-a43d-4c4f-b1ca-ea2e4811c1e0/main"
                    },
                    {
                        text: "Syllabus",
                        to: "https://sakai.unc.edu/access/content/attachment/8a9e886a-f4ae-4dad-818d-2e858cda6eda/Syllabus/f1ed9e08-a90c-4b8f-a05f-346c5e386ebe/ARTH%20387%20AAAD%20330%20Syllabus%20rev%2009%2028.pdf"
                    },
                    {
                        text: "Twitter",
                        to: "https://twitter.com/owenmc123"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp421
