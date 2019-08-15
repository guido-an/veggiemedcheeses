import React from "react"
import { Link } from "gatsby"
const Partner = (props) => (
    <div className="partner"> 
    <img src={props.img} width="200px"/>
    <p><strong>{props.name}</strong></p>
    <p className="website-url"><a href={props.websiteUrl}>{props.websiteName}</a></p>
    <Link to={props.url}><span className="link">> Find out more</span></Link> 
    <style jsx="true">{`
        .partner{
            text-align: center;
            margin-top: 80px
        }
        .website-url{
            position: relative;
            bottom:10px
        }
        .link{
            position: relative;
            bottom:8px;
            display:block;
            color: #222;
            font-weight: 600
        }
        
        @media(min-width:1200px){
            .partner{
                margin: 0 40px

            }
        }
        `}</style>
    </div>
)

export default Partner