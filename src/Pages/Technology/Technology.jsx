import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Technology.css"

const Technology = () => {
    useEffect(() => {
        document.title = 'Technology';
      })
  return (
    <section className="tech">
    <div className="containertech">
      <div className="all">
        <div className="categorytech">TECHNOLOGY</div>
        <div className="boxestech row">
          <div className="boxtech col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d80701f42d0c14a9032233_daniel-schludi-mbGxz7pt0jM-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toptechtext" to="/">Believing Their Own Hype</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="techtext">
              <div className="datetech">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomtechtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxtech col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d807764444514ab2f45967_francesco-WznI2IRqxZA-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toptechtext" to="/">Let’s Go Invent Tomorrow</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="techtext">
              <div className="datetech">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomtechtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxtech col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d8079cf77d817f17ae902c_bernd-dittrich-n0iZRPiYWuA-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toptechtext" to="/">Generations Are To Remember</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="techtext">
              <div className="datetech">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomtechtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxtech col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d807b379990a547e11b774_shubham-dhage-WzKi0E3ZFRc-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toptechtext" to="/">Next Wave Of Industry</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="techtext">
              <div className="datetech">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomtechtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Technology