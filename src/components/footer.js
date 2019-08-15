import React from "react"
import logo from "../images/veggie-med-cheeses-logo.png"
import { Link } from "gatsby"
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <Link to="/"><img
        src={logo}
        alt="logo-veggie-cheese"
        width="240px"
      /></Link>
      <p>Do you want to have more information? Please contact us.</p>
      <div className="footer-contact">
        <div>
          <strong>Email</strong><br/>
          <a href="mailto:l.aquilanti@staff.univpn.it">
            l.aquilanti@staff.univpn.it
          </a>
        </div>
      </div>
    </div>
    <style jsx="true">{`
        .footer{
            background-color: #79A43D;
            display: flex;
            justify-content: center;
            text-align: center;
            margin-top: 120px
           
        }
        .footer-container{
            background-color: white;
            box-shadow: 0px 0px 100px 0px rgba(12,5,5,0.2);
            border-radius: 4px;
            height: 300px;
            width: 90%;
            margin: 40px 0;
        }
        .footer-container p{
            font-weight: 600;
            color: #222 !important
        }
        @media(min-width: 1200px){
            .footer-container{
                width: 70%
            }
        }
        `}
    </style>
  </footer>
)

export default Footer
