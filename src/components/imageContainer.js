import React from 'react'
import Image from "../components/image";

export default function imageContainer() {
    return (
        <>
           <div className="img-container">
            <div
              className="img-wrapper"
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
            >
              <Image />
            </div>
          </div> 
        </>
    )
}
