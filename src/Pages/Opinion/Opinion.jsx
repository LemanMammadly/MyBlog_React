import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Opinion.css"

const Opinion = () => {
  useEffect(() => {
    document.title = 'Opinion';
  })
  return (
    <section className="opinion">
    <div className="containeropinion">
      <div className="all">
        <div className="categoryop">OPINION</div>
        <div className="boxesop row">
          <div className="boxop col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/6303550738e59e4e53262604_jose-aljovin-JZMdGltAHMo-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topbxtext" to="/">Green Transition</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="bxtext">
              <div className="datebx">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottombxtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxop col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb83d538096236558fdbc4_niklas-ohlrogge-EFIvaYLABmU-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topbxtext" to="/">What To Do With Your Life</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="bxtext">
              <div className="datebx">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottombxtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxop col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6f9d9facc873b2f3e884_ana-flavia-kR5VQr3-L9w-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topbxtext" to="/">2 Wrongs Makes a Right</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="bxtext">
              <div className="datebx">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottombxtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxop col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6e7a6b97cae240a937e1_patrick-tomasso-Oaqk7qqNh_c-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topbxtext" to="/">Is There Any End</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="bxtext">
              <div className="datebx">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottombxtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Opinion