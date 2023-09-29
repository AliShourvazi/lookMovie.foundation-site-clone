import "../../reset.css";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

import mario from "../../assets/images/mario.jpg";
import barbie from "../../assets/images/barbie.jpg";
import scifi from "../../assets/images/scifi.jpg";
import gotg from "../../assets/images/gotg.jpg";
import horror from "../../assets/images/horror.jpg";
import shark from "../../assets/images/shark.jpg";
import historic from "../../assets/images/historic.jpg";
import fantesy from "../../assets/images/fantesy.jpg";

function CarouselComp() {
  return (
    <section id="Carousel" style={{ margin: "100px 0" }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={mario} alt="First slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>
              <div className="right">
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={gotg} alt="Second slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>
              <div className="right">
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={shark} alt="Second slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>
              <div className="right">
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={historic} alt="Second slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>

              <div className="right">
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={fantesy} alt="Second slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>
              <div className="right">
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={horror} alt="Second slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>
              <div className="right">
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={scifi} alt="Second slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>
              <div className="right">
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={barbie} alt="Third slide" />
          <Carousel.Caption className=" w-100">
            <div className="content">
              <div className="left">
                <h5> Movies Name</h5>
                <section className="tags">
                  <div id="rating">8.1</div>
                  <div id="quality">FHD</div>
                  <div id="time">125</div>
                  <p>#ADVENTURE</p>
                  <p>#ACTION</p>
                </section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt rem incidunt odit nisi quas, tempore ducimus quis
                  recusandae explicabo odio?
                </p>
              </div>

              <div
                className="right"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <button className="watch">Watch Now</button>
                <button className="trailer"> Trailer</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default CarouselComp;
