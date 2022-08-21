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
                        text: "Lecture Syllabus",
                        to: "https://sakai.unc.edu/access/lessonbuilder/item/3556204/group/38ec1b0b-7373-428a-ac0b-382bfe601f64/Lessons/Syllabus_GEOL101_Fa22.pdf"
                    },
                    {
                        text: "Lab Syllabus",
                        to: "https://sakai.unc.edu/access/lessonbuilder/item/3569041/group/527fccb8-1dfb-4023-9f1b-0cf118df0190/Logistics_Schedule/Fall2022_labsyllabus-1.pdf"
                    },
                    {
                        text: "Lecture Sakai",
                        to: "https://sakai.unc.edu/portal/site/38ec1b0b-7373-428a-ac0b-382bfe601f64/tool/4f2b7fe8-d81e-42b3-a0d9-49c1e9963095"
                    },
                    {
                        text: "Lab Sakai",
                        to: "https://sakai.unc.edu/portal/site/527fccb8-1dfb-4023-9f1b-0cf118df0190/tool/598a8813-98f9-4654-a534-3352807eabbf"
                    },
                    {
                        text: "PollEv",
                        to: "https://pollev.com/mfplenge"
                    },
                    {
                        text: "Textbook",
                        to: "https://newconnect.mheducation.com/"
                    },
                    {
                        text: "Lecture Gradescope",
                        to: "https://www.gradescope.com/courses/416547"
                    },
                    {
                        text: "Lab Gradescope",
                        to: "https://www.gradescope.com/courses/414991"
                    }
                ]}
            />
            <Footer />
        </div>
    )
}

export default Comp421
