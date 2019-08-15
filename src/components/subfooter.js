import React from "react"

const Subfooter = () => (
    <section className="subfooter">
         
           <a href="https://www.vanillamarketing.it/"> © {new Date().getFullYear()} | Website created by Vanilla Marketing</a>
           <style jsx="true">{`
               .subfooter{
                   text-align: center;
                   padding: 10px;
               }
               .subfooter a{
                   color: #777;
                   font-size: 14px;
               }
               `}</style>
    </section>
        
)

export default Subfooter