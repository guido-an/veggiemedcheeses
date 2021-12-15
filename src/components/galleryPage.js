import React from 'react'
import Image1 from '../images/Cynara-humilis.jpg'
import Image2 from '../images/Evaluation-of-thistle-seeds-parameters.jpg'
import Image3 from '../images/Germinated-Onopordum-tauricum.jpg'
import Image4 from '../images/Onopordum-platylepis-after-transplantation-in-pots-with-soil-1.jpg'
import Image5 from '../images/Onopordum-platylepis-spontaneously-growing-in-Tunisia.jpg'
import Image6 from '../images/overview.jpg'
import Image7 from '../images/THISTLE-FLOWERS.jpg'
import Image8 from '../images/THISTLE-SEEDS-GERMINATION.jpg'
import Image9 from '../images/THISTLE-SEEDS.jpg'
import Image10 from '../images/Cynara-humilis-3.jpg'
import Image11 from '../images/DSC_1141.jpg'
import Image12 from '../images/IMG-20200219-WA0007.jpg'
import Image13 from '../images/galleryPage/veggie-gallery_1.jpg'
import Image14 from '../images/galleryPage/veggie-gallery_2.jpg'
import Image15 from '../images/galleryPage/veggie-gallery_3.jpg'
import Image16 from '../images/galleryPage/veggie-gallery_4.jpg'
import Image17 from '../images/galleryPage/veggie-gallery_5.jpg'
import Image18 from '../images/galleryPage/veggie-gallery_6.jpg'
import Image19 from '../images/galleryPage/veggie-gallery_7.jpg'
import Image20 from '../images/galleryPage/veggie-gallery_8.jpg'
import Image21 from '../images/galleryPage/veggie-gallery_9.jpg'

const GalleryPage = () => (

  <section className='gallery'>
    <div className='photo-container'>
      <img src={Image13} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image14} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image15} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image16} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image17} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image18} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image19} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image20} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image21} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image10} />
      <p>Cynara Humilis</p>
    </div>
    <div className='photo-container'>
      <img src={Image11} />
      <p />
    </div>
    <div className='photo-container'>
      <img src={Image6} />
      <p>Overview</p>
    </div>
    <div className='photo-container'>
      <img src={Image2} />
      <p>Evaluation of thistle seeds parameters</p>
    </div>
    <div className='photo-container'>
      <img src={Image3} />
      <p>Germinated Onopordum tauricum</p>
    </div>
    <div className='photo-container'>
      <img src={Image1} />
      <p>Cynara Humilis</p>
    </div>
    <div className='photo-container'>
      <img src={Image4} />
      <p>Onopordum platylepis after transplantation in pots with soil</p>
    </div>
    <div className='photo-container'>
      <img src={Image5} />
      <p>Onopordum platylepis spontaneously growing in Tunisia</p>
    </div>
    <div className='photo-container'>
      <img src={Image7} />
      <p>Thistle Flowers</p>
    </div>
    <div className='photo-container'>
      <img src={Image8} />
      <p>Thistle Seeds Germination</p>
    </div>
    <div className='photo-container'>
      <img src={Image9} />
      <p>Thistle Seeds</p>
    </div>

    <div className='photo-container'>
      <img src={Image12} />
      <p />
    </div>
    <style jsx='true'>{`
       .gallery{
         position: relative;
         top: 120px
       }
      .photo-container {
        background-color: #f7f7f7;
        margin: 0 10px 20px;
        padding-bottom: 5px
      }
      .photo-container img {
        height: auto;
        width: 100%;
        margin: 0 auto;
        display: inline-block
      }
      .photo-container p {
        position: relative;
        left: 10px
      }
      @media (min-width: 768px) {
        .photo-container{
          width: 32.5%
        }
        .gallery {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-evenly
        }
        .photo-container {
           margin: 0 0 20px;
       }
    
      }
    `}
    </style>
  </section>
)

export default GalleryPage
