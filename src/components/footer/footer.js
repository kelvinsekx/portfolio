import React from "react"
import "./footer.css"

export default function Footer() {
  return (
    <div className="container" style={{ paddingTop: "3rem" }}>
      <hr />
      <footer>
        <aside>&copy; 2020 kelvinsekx. All rights reserved</aside>
        <aside id="asideFlex">
          <div>Made with all the christ love and agape
            <span id="love">&#10084;</span>
          there is in the world.</div>
        </aside>
      </footer>
      <hr />
      <div>
        <p>Kelvinsekx.codes is built, maintained and written by Ukuejubola Kelvin Oritsetimeyin.</p>
      </div>
      <div style={{fontSize: '0.7em'}}>
        Icons from{" "}
        <a className="link" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  )
}
