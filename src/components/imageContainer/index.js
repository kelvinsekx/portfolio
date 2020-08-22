import React from 'react'

import "./imagecontainer.scss"
import Image from "../image";

export default function imageContainer() {
    return (
        <>
           <div className="img-container">
            <div className="img-wrapper">
              <Image />
            </div>
          </div> 
        </>
    )
}
