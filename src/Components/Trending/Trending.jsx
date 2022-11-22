import React from "react";
import { NavLink } from "react-router-dom";
import "./Trending.css";

const Trending = () => {
  return (
    <section className="trending">
      <div className="trendingContainer">
        <div className="row all">
          <div className="trendingLeft col-lg-4">
            <h3>Trending Stories</h3>
            <div className="trendingLeft-box">
              <p>Design</p>
              <div className="trendingLeft-box-top">
                <span>1</span>
                <NavLink to="/" className="post-title">
                  Manual Informative <br /> Place
                </NavLink>
              </div>
              <div className="trendingLeft-box-bottom">
                <div className="date">21/05/2008</div>
                <div className="circle"></div>
                <NavLink to="/">Enzo Romano</NavLink>
              </div>
              <hr />
            </div>
            <div className="trendingLeft-box">
              <p>FOOD</p>
              <div className="trendingLeft-box-top">
                <span>2</span>
                <NavLink to="/" className="post-title">
                  Exploring Culinary <br /> Corridor
                </NavLink>
              </div>
              <div className="trendingLeft-box-bottom">
                <div className="date">21/05/2008</div>
                <div className="circle"></div>
                <NavLink to="/">Martha Collins</NavLink>
              </div>
              <hr />
            </div>
            <div className="trendingLeft-box">
              <p>LIFE</p>
              <div className="trendingLeft-box-top">
                <span>3</span>
                <NavLink to="/" className="post-title">
                  The First Time To <br /> Be Me
                </NavLink>
              </div>
              <div className="trendingLeft-box-bottom">
                <div className="date">21/05/2008</div>
                <div className="circle"></div>
                <NavLink to="/">Martha Collins</NavLink>
              </div>
              <hr />
            </div>
            <div className="trendingLeft-box">
              <p>OPINION</p>
              <div className="trendingLeft-box-top">
                <span>4</span>
                <NavLink to="/" className="post-title">
                  Green Transition Is <br /> Happening Fast
                </NavLink>
              </div>
              <div className="trendingLeft-box-bottom">
                <div className="date">21/05/2008</div>
                <div className="circle"></div>
                <NavLink to="/">Liv Gunther</NavLink>
              </div>
              <hr />
            </div>
            <div className="trendingLeft-box">
              <p>TECHNOLOGY</p>
              <div className="trendingLeft-box-top">
                <span>5</span>
                <NavLink to="/" className="post-title">
                  Believing Their <br /> Own Hype
                </NavLink>
              </div>
              <div className="trendingLeft-box-bottom">
                <div className="date">21/05/2008</div>
                <div className="circle"></div>
                <NavLink to="/">Thomas Newman</NavLink>
              </div>
              <hr />
            </div>
            <div className="trendingLeft-box">
              <p>TRAVEL</p>
              <div className="trendingLeft-box-top">
                <span>6</span>
                <NavLink to="/" className="post-title">
                  Online Travel <br /> Planning
                </NavLink>
              </div>
              <div className="trendingLeft-box-bottom">
                <div className="date">21/05/2008</div>
                <div className="circle"></div>
                <NavLink to="/">Thomas Newman</NavLink>
              </div>
              <hr />
            </div>
          </div>
          <div className="trendingRight col-lg-8">
            <div className="trendrightall col-lg-12 row justify-content-between">
              <div className="trndRight-left col-lg-6">
                <NavLink to="/">
                  <img
                    src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/63035dbdc5a73eb524987f64_sharan-pagadala-bWQPgLMJ7sg-unsplash-1.jpg"
                    alt="img"
                  />
                </NavLink>
              </div>
              <div className="trndRight-right col-lg-5">
                <NavLink to="/" className="titleLink">
                  Manual Informative Place
                </NavLink>
                <span>Temporibus modi voluptate</span>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
                <NavLink to="/" className="readmore">
                  Read More
                </NavLink>
              </div>
            </div>
            <div className="trendrightall col-lg-12 row justify-content-between mt-5">
              <div className="trndRight-right col-lg-5">
                <NavLink to="/" className="titleLink">
                  Find Out Why This Is The Right Thing
                </NavLink>
                <span>Temporibus modi voluptate</span>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
                <NavLink to="/" className="readmore">
                  Read More
                </NavLink>
              </div>
              <div className="trndRight-left col-lg-6">
                <NavLink to="/">
                  <img
                    src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/630386b3d2d07a01c197af1d_raamin-ka-0qJBEzudn5E-unsplash-1-p-800.jpg"
                    alt="img"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;