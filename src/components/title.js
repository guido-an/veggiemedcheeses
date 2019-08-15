import React from "react"
import Divider from "./divider"
const Title = props => (
  <div className="title-wrapper">
    <h1>{props.title}</h1>
    <Divider />
    <style jsx="true">{`
    .title-wrapper {
        text-align: center;
        margin-top: 80px;
        margin-bottom: 10px
      }
      h1{
          font-size: 42px
      }
        `}</style>
  </div>
)

export default Title
