import React from 'react'
import { Link } from 'react-router-dom'
import "./Grid.css"

const Grid = () => {
  return (
    <section className='grid'>
        <div className="containergrid">
            <div className="row">
                <div className="left col-lg-3">
                    <div className="categorygrid">
                        DESIGN
                    </div>
                    <div className="griditem">
                        <div className="leftgrid col-lg-6">
                            <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/63035dbdc5a73eb524987f64_sharan-pagadala-bWQPgLMJ7sg-unsplash-1.jpg" alt="" />
                        </div>
                        <div className="rightgrid col-lg-5">
                            <Link to="/">Manual Informative Place</Link>
                            <br />
                            <div className="span"><span>21/05/2008</span></div>
                        </div>
                    </div>
                    <hr className='mt-5'/>
                    <div className="griditem">
                        <div className="leftgrid col-lg-6">
                            <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dffa21c6e00c3079113d1f_jurica-koletic-oLU63uzhT88-unsplash-1-p-800.jpg" alt="" />
                        </div>
                        <div className="rightgrid col-lg-5">
                            <Link to="/">No Fear Of Perfection</Link>
                            <br />
                            <div className="span"><span>21/05/2008</span></div>
                        </div>
                    </div>
                    <hr className='mt-5'/>
                    <div className="griditem">
                        <div className="leftgrid col-lg-6">
                            <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97f718f65c2169b78a5c_yuichi-kageyama-iGompEDkVV8-unsplash-1-p-800.jpg" alt="" />
                        </div>
                        <div className="rightgrid col-lg-5">
                            <Link to="/">The Light Goes Out</Link>
                            <br />
                            <div className="span"><span>21/05/2008</span></div>
                        </div>
                    </div>
                    <hr className='mt-5'/>
                    <div className="griditem">
                        <div className="leftgrid col-lg-6">
                            <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97c847f6452eb020aaa1_fredrika-carlsson-xEQpc-who84-unsplash-1.jpg" alt="" />
                        </div>
                        <div className="rightgrid col-lg-5">
                            <Link to="/">Your Comfort Zone</Link>
                            <br />
                            <div className="span"><span>21/05/2008</span></div>
                        </div>
                    </div>
                    <hr className='mt-5'/>
                </div>
                <div className="center col-lg-5">
                    <div className="allcenter">
                        <img src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d80701f42d0c14a9032233_daniel-schludi-mbGxz7pt0jM-unsplash-1.jpg" alt="" />
                        <Link to="/">Believing Their Own Hype</Link>
                        <p>Temporibus modi voluptate</p>
                        <span>By <span className='orangetext'>Thomas Newman</span></span>
                    </div>
                </div>
                <div className="right col-lg-4">
                    <div className="top">
                        <div className="categorygrid">OPINION</div>
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/6303550738e59e4e53262604_jose-aljovin-JZMdGltAHMo-unsplash-1.jpg" alt="" />
                        <div className="alltextrightgrid">
                        <div className="texthd"><Link className='texthead' to="/">Green Transition Is Happening Fast</Link></div>
                        <Link className='textbot' to="/">Liv Gunther</Link>
                        </div>
                        <hr />
                    </div>
                    <div className="bottom row">
                        <div className="left col-lg-6">
                            <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6f9d9facc873b2f3e884_ana-flavia-kR5VQr3-L9w-unsplash-1.jpg" alt="" />
                            <div className="btmtextleft"><Link className='bottomtextleft' to="/">2 Wrongs Makes a Right</Link></div>
                            <Link className='textbot' to="/">Thomas Newman</Link>
                            <hr />
                        </div>
                        <div className="right col-lg-6">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6e7a6b97cae240a937e1_patrick-tomasso-Oaqk7qqNh_c-unsplash-1.jpg" alt="" />
                            <div className="btmtextleft"><Link className='bottomtextleft' to="/">Is There Any End</Link></div>
                            <Link className='textbot' to="/">Liv Gunther</Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Grid