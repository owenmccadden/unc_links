import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom";

import "./CourseStyles.css";

const Course = (props) => {
    return (
        <div id="link_container">
            {props.links.map((link) => {
                return <Button as="a" href={link.to} target="_blank" key={link.to} className='link animate__bounceIn animate__faster'>{link.text}</Button>
            })}
        </div>
    )
}

export default Course
