import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
import logo from "../../assets/images/logo.png";
import Anh18 from "../../assets/images/information/vn-18plus.png";

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
                    </section>
                </div>
                <img src={Anh18} style={{paddingBottom:"50px"}}/>
                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2022 Edited by :
                    <a className="text-white" href="/">Lưu Ngọc Long-</a>
                    <a className="text-white" href="/">Nguyễn Minh Hiếu-</a>
                    <a className="text-white" href="/">Trương Ngọc Vượng-</a>
                    <a className="text-white" href="/">Lê Anh Tuấn</a>
                </div>
            </footer>

        </div>
    );
}

export default Footer;