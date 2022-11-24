import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Travel.css"

const Travel = () => {
  useEffect(() => {
    document.title = 'Travel';
  })
  return (
    <section className="travel">
      <div className="containertravel">
        <div className="all">
          <div className="categorytravel">TRAVEL</div>
          <div className="boxestr row">
            <div className="boxtr col-lg-3">
            <img
                className="img-fluid"
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb85065c5d9883969e7d23_arnel-hasanovic-Nl-SXO4FAHw-unsplash-1-p-800.jpg"
                alt=""
              />
              <div className="toptextdiv my-2"><Link className="toptrtext" to="/">Online Travel Planning</Link></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trtext">
                <div className="datetr">9/9/2022</div>
                <div className="circle"></div>
                <Link className="bottomtrtext" to="/">Enzo Romano</Link>
              </div>
              <hr />
            </div>
            <div className="boxtr col-lg-3">
            <img
                className="img-fluid"
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fbad0697df1606246f3a32_aaron-burden-cEukkv42O40-unsplash-1-p-800.jpg"
                alt=""
              />
              <div className="toptextdiv my-2"><Link className="toptrtext" to="/">Heat Waves Are Changing</Link></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trtext">
                <div className="datetr">9/9/2022</div>
                <div className="circle"></div>
                <Link className="bottomtrtext" to="/">Enzo Romano</Link>
              </div>
              <hr />
            </div>
            <div className="boxtr col-lg-3">
            <img
                className="img-fluid"
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb856631a23e47b7b6dc88_jack-anstey-XVoyX7l9ocY-unsplash-1-p-800.jpg"
                alt=""
              />
              <div className="toptextdiv my-2"><Link className="toptrtext" to="/">The Sound Of Adventure</Link></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trtext">
                <div className="datetr">9/9/2022</div>
                <div className="circle"></div>
                <Link className="bottomtrtext" to="/">Enzo Romano</Link>
              </div>
              <hr />
            </div>
            <div className="boxtr col-lg-3">
            <img
                className="img-fluid"
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6ea576bf7644a7fd69b2_dino-reichmuth-A5rCN8626Ck-unsplash-1-p-800.jpg"
                alt=""
              />
              <div className="toptextdiv my-2"><Link className="toptrtext" to="/">A Backpacker’s Guide</Link></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trtext">
                <div className="datetr">9/9/2022</div>
                <div className="circle"></div>
                <Link className="bottomtrtext" to="/">Enzo Romano</Link>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Travel