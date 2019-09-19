import React from "react"
import logo from "../images/veggie-med-cheeses-logo.png"
import logoEuropa from "../images/european-commission-logo.jpg"
import logoPrima from "../images/prima-logo.jpg"
import trelloLogo from "../images/trello-logo.png"
import { Link } from "gatsby"
import Newsletter from "./newsletter"

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo-container"
        style={{ marginBottom: "20px", marginTop: "10px" }}
      >
        <a href="https://ec.europa.eu/commission/index_en" target="_blank">
          <img src={logoEuropa} alt="logo-european-commission" width="240px" />
        </a>
        <Link to="/">
          <img src={logo} alt="logo-veggie-cheese" width="240px" />
        </Link>
        <a href="http://prima-med.org/" target="_blank">
          <img src={logoPrima} alt="logo-prima" width="240px" />
        </a>
      </div>
         <a href=" https://trello.com/b/BfZlqB3t" target="_blank"><img src={trelloLogo} width="50px"></img></a>
      <p>Do you want to have more information? Please contact us.</p>
      <div className="footer-contact">
        <div>
          <strong>Email</strong>
          <br />
          <a href="mailto:l.aquilanti@staff.univpm.it">
            l.aquilanti@staff.univpm.it
          </a>
        </div>
      </div>
      <Newsletter/>
    </div>
   
    <style jsx="true">
      {`
        .footer {
          background-color: #79a43d;
          display: flex;
          justify-content: center;
          text-align: center;
          margin-top: 120px;
        }
        .footer-container {
          background-color: white;
          box-shadow: 0px 0px 100px 0px rgba(12, 5, 5, 0.2);
          border-radius: 4px;
          width: 90%;
          margin: 40px 0;
        }
        .footer-container p {
          font-weight: 600;
          color: #222 !important;
          margin: 40px 10px 10px;
        }
        
        @media (min-width: 1200px) {
          .footer-container {
            width: 75%;
          }
          .footer-logo-container{
            display: flex;
            justify-content: center
          }
        
        }
      `}
    </style>
  </footer>
)

export default Footer
