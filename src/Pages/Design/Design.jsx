import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Design.css"

const Design = () => {
  useEffect(() => {
    document.title = 'Design';
  })
  return (
    <section className="design">
    <div className="containerdesign">
      <div className="all">
        <div className="categorydesign">DESIGN</div>
        <div className="boxesdn row">
          <div className="boxdn col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/63035dbdc5a73eb524987f64_sharan-pagadala-bWQPgLMJ7sg-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topdntext" to="/">Manual Informative Place</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="dntext">
              <div className="datedn">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomdntext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxdn col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dffa21c6e00c3079113d1f_jurica-koletic-oLU63uzhT88-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topdntext" to="/">No Fear Of Perfection</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="dntext">
              <div className="datedn">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomdntext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxdn col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97f718f65c2169b78a5c_yuichi-kageyama-iGompEDkVV8-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topdntext" to="/">The Light Goes Out</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="dntext">
              <div className="datedn">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomdntext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxdn col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97c847f6452eb020aaa1_fredrika-carlsson-xEQpc-who84-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="topdntext" to="/">Your Comfort Zone</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="dntext">
              <div className="datedn">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomdntext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Design