import React from "react";
import "../styles/style.css";

const BucketList = (props) => {
  console.log(props);
  return (
    <div>
      {props.list_a.map((item) => (
        <div key={props.list_a} className="list-item">
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export default BucketList;
