import React from "react";
import "./Footer.css";
import Logo from "/Logo2.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-padding">
        <div className="footer-box">
          <div className="footer-box-social ">
            <Link>
              <img
                src={Logo}
                alt="LOGO IMAGE"
                width="187px"
                height="60px"
              ></img>
            </Link>

            <div className="footer-social-info">
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                recusandae excepturi quos, possimus nostrum esse corporis
              </p>
            </div>

            <div className="footer-social"></div>
          </div>

          <div>
            <h4>Navigation</h4>

            <ul className="footer-lists">
              <li>
                <Link to="/" className="footer-links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="footer-links">
                  About us
                </Link>
              </li>
              <li>
                <Link to="contact" className="footer-links">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-links">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Store</h4>

            <ul className="footer-lists">
              <li>
                <Link to="/" className="footer-links">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  Policy Statements
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  User Agreements
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-links">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-div">
            <h4>Contact Information</h4>

            <p>
              House 9, Curvey Barracks, Manitoba
              <br />
              (+21) 35 643 2279
              <br />
              pethubcommunity@gmail.com <br />
            </p>
          </div>

          <div className="footer-div">
            <h4>Opening Hours</h4>

            <p>
              Mon - Fri 09:00am - 10:00pm <br />
              Sat - Sun 11:00am - 10:00pm
              <br />
            </p>
          </div>
        </div>

        <hr />
        <div className="footer-below">
          <div className="footer-copyright">
            <p>
              Copyright @{new Date().getFullYear()} petHub. All right reserved
            </p>
          </div>
        </div>

       
      </div>
      
    </footer>
  );
}
