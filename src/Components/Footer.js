import React from 'react'

// styles
import "./FooterStyles.css";

// components
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div id='footer_container' variant='dark'>
            <div className='container'>
                <div className='row'>
                    <div id='footer_bottom'>
                        <p className='text-xs-center'>&copy; Copyright {new Date().getFullYear()} <a target={"_blank"} href='http://owenmccadden.github.io'>Owen McCadden</a></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
