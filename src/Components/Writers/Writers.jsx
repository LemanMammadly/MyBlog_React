import React from 'react'
import "./Writers.css"

const Writers = () => {
  return (
    <section className='writers'>
        <div className="container">
            <div className="allwr">
                <h2>Our Writers</h2>
                <div className="boxeswrt row">
                    <div className="boxwrt col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab54f4483041e5969e7e9_pexels-mikhail-nilov-6592361-1.jpg" alt="" />
                        <div className="author">AUTHOR</div>
                        <div className="authorname">Enzo Romano</div>
                    </div>
                    <div className="boxwrt col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab5578c523a8decbbeff2_pexels-cottonbro-4098260-1.jpg" alt="" />
                        <div className="author">AUTHOR</div>
                        <div className="authorname">Liv Gunther</div>
                    </div>
                    <div className="boxwrt col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab564c266a35b284cae42_pexels-emmy-e-2381069-1.jpg" alt="" />
                        <div className="author">AUTHOR</div>
                        <div className="authorname">Martha Collins</div>
                    </div>
                    <div className="boxwrt col-lg-3">
                        <img className='img-fluid' src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab56c8c523a026ebbf174_pexels-karolina-grabowska-6333501-1.jpg" alt="" />
                        <div className="author">AUTHOR</div>
                        <div className="authorname">Thomas Newman</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Writers