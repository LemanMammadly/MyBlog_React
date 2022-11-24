import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Life.css"

const Life = () => {
  useEffect(() => {
    document.title = 'Life';
  })
  return (
    <section className="life">
    <div className="containerlife">
      <div className="all">
        <div className="categorylife">LIFE</div>
        <div className="boxeslf row">
          <div className="boxlf col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb8939225141bf84029385_jukan-tateisi-bJhT_8nbUA0-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toplftext" to="/">The First Time To Be Me</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="lftext">
              <div className="datelf">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomlftext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxlf col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/630386b3d2d07a01c197af1d_raamin-ka-0qJBEzudn5E-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toplftext" to="/">Just Getting Started</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="lftext">
              <div className="datelf">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomlftext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxlf col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6f14c273de85323a8443_aideal-hwa-OYzbqk2y26c-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toplftext" to="/">Find Out Why This Is The Right</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="lftext">
              <div className="datelf">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomlftext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
          <div className="boxlf col-lg-3">
          <img
              className="img-fluid"
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6e536a8a271f97c23cf4_randy-fath-I0C1zdto_YA-unsplash-1-p-800.jpg"
              alt=""
            />
            <div className="toptextdiv my-2"><Link className="toplftext" to="/">Be Better Than Yourself</Link></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="lftext">
              <div className="datelf">9/9/2022</div>
              <div className="circle"></div>
              <Link className="bottomlftext" to="/">Enzo Romano</Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Life