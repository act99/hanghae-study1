import styled from "styled-components";
import React from "react";
const Text = () => {
  const circle = React.useRef(null);
  const text = React.useRef(null);

  const hoverEvent = (e) => {
    console.log(e.target);
    text.current.style.background = "yellow";
    console.log(circle.current.style.background);

    // circle.current.style.background === "green"
    //   ? (circle.current.style.background = "yellow")
    //   : (circle.current.style.background = "green");
  };

  React.useEffect(() => {
    console.log(circle.current);
    circle.current.addEventListener("mouseover", hoverEvent);
    return () => {
      circle.current.removeEventListener("mouseover", hoverEvent);
    };
  }, []);

  return (
    <div>
      <h1 ref={text}>텍스트입니다.</h1>
      <Circle ref={circle} />
    </div>
  );
};

const Circle = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  background: green;
`;

export default Text;
