import React from 'react'
import { Link } from 'react-router-dom'
import "./Spotlight.css"

const Spotlight = () => {
  return (
    <section className='spotlight'>
        <div className="containerspotlight">
            <div className="all">
                <h1 className='toptext text-center'>Spotlight</h1>
                <div className="categorytop text-center my-3">FOOD</div>
                <div className="boxes row">
                    <div className="box col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfda96a34b9f830e0f7f7e_emy-XoByiBymX20-unsplash-1-p-800.jpg" alt="" />
                        <div className="boxtext my-3"><Link to="/">Exploring Culinary Corridor</Link></div>
                        <hr />
                    </div>
                    <div className="box col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea6da1d266f322559d6ae_jonathan-pielmayer-ecbZ5gEE-60-unsplash-1-p-800.jpg" alt="" />
                        <div className="boxtext my-3"><Link to="/">Amazed With Tastes</Link></div>
                        <hr />
                    </div>
                    <div className="box col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea721487e20438d8e9d75_sahand-babali-q1SQqb9zEF8-unsplash-1-p-800.jpg" alt="" />
                        <div className="boxtext my-3"><Link to="/">The Compassionate Road</Link></div>
                        <hr />
                    </div>
                    <div className="box col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfcda256b8041b7ceab72d_vita-marija-murenaite-eSeo6IzOV00-unsplash-1-p-800.jpg" alt="" />
                        <div className="boxtext my-3"><Link to="/">Eating My Empire</Link></div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Spotlight