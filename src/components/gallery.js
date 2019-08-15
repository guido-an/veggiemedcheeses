import React from "react"
import Image1 from "../images/vegcheese.jpg"
import Image2 from "../images/vegcheese-2.jpg"
import Image3 from "../images/vegcheese-3.jpg"
import Image4 from "../images/vegcheese-4.jpg"

let photo = {
  height: "300px",
  backgroundRepeat: "no-repeat",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
}
let gallery1 = {
  backgroundImage: `url(${Image1})`,
}
let gallery2 = {
  backgroundImage: `url(${Image2})`,
}
let gallery3 = {
  backgroundImage: `url(${Image3})`,
}
let gallery4 = {
  backgroundImage: `url(${Image4})`,
}

const Gallery = () => (
  <section id="gallery">
    <div style={gallery1} className="photo"></div>
    <div style={gallery2} className="photo"></div>
    <div style={gallery3} className="photo"></div>
    <div style={gallery4} className="photo"></div>
    

    <style jsx="true">{`
       #gallery{
       
         position: relative;
         top: 120px
       }
      .photo {
        height: 300px;
        background-repeat: no-repeat;
        width: 100%;
        background-size: cover;
        background-position: center;
      }
      @media (min-width: 768px) {
        #gallery {
          display: flex;
        }
       
      }
    `}</style>
  </section>
)

export default Gallery
