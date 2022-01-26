import React from "react";

const Nemo = () => {
  const [count, setCount] = React.useState(3);

  let nemo_count = Array.from({ length: count }, (item, index) => index);
  console.log(count);

  return (
    <div>
      {nemo_count.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#ddd",
              margin: "30px",
            }}
          >
            nemo
          </div>
        );
      })}
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          추가
        </button>
        <button
          onClick={() => {
            count > 0 ? setCount(count - 1) : alert("count 0");
          }}
        >
          빼기
        </button>
      </div>
    </div>
  );
};

export default Nemo;
