import { useState } from "react";
import tileImage from "./assets/tile-img.png";
import lock from "./assets/Lock.png";
import modalImg from "./assets/modalslider.jpeg";
import close from "./assets/Close.png";

function App() {
  const [show, setShow] = useState(false);
  const arr = new Array(6).fill(0);
  const modalArr = new Array(10).fill(0);
  console.log(arr);

  const handleShow = ()=>{
    setShow(!show);
  }

  const handleShowContainer = ()=>{

    if( show) setShow(!show);
  }

  return (
    <>
      <div className="container" onClick={handleShowContainer}>
        <div className="tile-continer">
          {arr.map((ele, ind) => {
            return (
              <div className="tile" onClick={handleShow}>
                <div className="lock">
                  {" "}
                  <img src={lock} alt="" />{" "}
                </div>
                <img src={tileImage} alt="dish" />
                <h3 className="tile-desc">
                  A Family Favourite: Sam’s Sticky Chicken
                </h3>
              </div>
            );
          })}
          <button className="freeBtn">Try For Free</button>
        </div>

        <div className="modal" style={ { display: show ? 'flex' : 'none' } }>
          <div className="modal-header">
            <img src={close} alt="" onClick={handleShow}/>
            <h3>
              Join now to unlock our 7 day meal plans
              <br />
              and thousands of recipes
            </h3>
          </div>
          <p>Start your 7-day Free Trial today</p>
          <div className="slider">
            {modalArr.map((ele, val) => {
              return (
                <div className="slide">
                  <span>Nutfree</span>
                  <img src={modalImg} alt="" />
                </div>
              );
            })}
          </div>

          <div className="bottom">
            <button className="freeBtn">Try For Free</button>
            <p>See all recipes in The Locker when you join</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
