import React from "react"
import Image1 from "../images/vegcheese.jpg"
import Image2 from "../images/vegcheese-2.jpg"
import Image3 from "../images/vegcheese-3.jpg"
import Image4 from "../images/vegcheese-4.jpg"

const Gallery = () => (
  <section id="gallery">
    <div className="photo">
      <img src={Image1}></img>
    </div>
    <div className="photo">
      <img src={Image2}></img>
    </div>
    <div className="photo">
      <img src={Image3}></img>
    </div>
    {/* <div className="photo"><img src={Image4}></img></div> */}

    <style jsx="true">{`
        #gallery{
            position: relative;
            top: 125px
        }
        .photo{
            margin: 0 auto;
            display: block;
        }
      @media (min-width: 768px) {
        #gallery {
          display: flex;
          position: static;
          top: 0
        }
        .photo {
          width: 33%;
          max-height: 200px;
        }
      }
    `}</style>
  </section>
)

export default Gallery
