import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Food.css"

const Food = () => {
  useEffect(() => {
    document.title = 'Design';
  })
  return (
    <section className="food">
    <div className="containerfood">
      <div className="all">
        <div className="categoryfood">FOOD</div>
        <div className="boxesfd row">
          <div className="boxfd col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfda96a34b9f830e0f7f7e_emy-XoByiBymX20-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topfdtext" to="/">Exploring Culinary Corridor</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="fdtext">
              <div className="datefd">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomfdtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxfd col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea6da1d266f322559d6ae_jonathan-pielmayer-ecbZ5gEE-60-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topfdtext" to="/">Amazed With Tastes</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="fdtext">
              <div className="datefd">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomfdtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxfd col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea721487e20438d8e9d75_sahand-babali-q1SQqb9zEF8-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topfdtext" to="/">The Compassionate Road</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="fdtext">
              <div className="datefd">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomfdtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxfd col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfcda256b8041b7ceab72d_vita-marija-murenaite-eSeo6IzOV00-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topfdtext" to="/">Eating My Empire</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="fdtext">
              <div className="datefd">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomfdtext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Food