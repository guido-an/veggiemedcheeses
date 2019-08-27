import React from "react"
import { Link } from "gatsby"

const profileImg = props => (
  <div className="profile-img" style={{marginTop: "40px"}}>
    <img
      style={{
        borderRadius: "50%",
        boxShadow:
          "0px 0px 10px 0px rgba(12,5,5,0.4)",
          display: "block",
          margin: "0 auto"
      }}
      src={props.img}
    ></img>
    <p style={{color: "#222 !important", textAlign: "center", fontWeight: "600"}}>{props.name}</p>
    <p style={{color: "#777", position: "relative", bottom: "15px", weight: "600", display: "block", textAlign: "center"}}>{props.organization}</p>
 
  </div>
)

export default profileImg
