import React from "react";

const HomePage = () => {
  let counter = 0;
  const getData = () => {
    console.log("fetching up........... ", counter++);
  };

  const debounce = function (fn, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        getData.apply(context, arguments);
      }, d);
    };
  };

  const betterFunction = debounce(getData, 300);
  return (
    <>
      <div
        style={{
          backgroundColor: "blueviolet",
          margin: "2px",
          fontSize: "25px",
          color: "white",
        }}
      >
        <a style={{ margin: "6rem" }}>home</a>
        <a style={{ margin: "6rem" }}>home</a>
        <a style={{ margin: "2rem" }}>home</a>
        <a style={{ margin: "16rem" }}>home</a>
        {/* <div style={{ margin: "3rem" }}> */}
        <input type="text" onKeyUp={betterFunction} />
        SEARCH
        {/* </div> */}
      </div>
    </>
  );
};

export default HomePage;
