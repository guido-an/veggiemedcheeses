import React from "react"
import { Link } from "gatsby"

const Button = (props) => (
    <div>
        <Link className="button" to={props.link}>{props.linkName}</Link>
        <style jsx="true">{`
        .button {
          text-decoration: none;
          padding: 8px 15px;
          border: 2px solid #79a43d;
          color: #79a43d;
          font-weight: 600;
          margin-top: 10px;
          display: inline-block;
          font-size: 14px;
          border-radius: 4px;
          transition: all 0.2s ease-in-out;
        }
        .button:hover{
            background-color: #79a43d;
            color: #fff;
            transform: scale(1.1);
        }
            `}</style>
    </div>
)

export default Button