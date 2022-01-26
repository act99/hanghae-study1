import React from "react";
import styled from "styled-components";

const BucketList = (props) => {
  let list = props.props;
  return (
    <div>
      {list.map((item, index) => (
        <Wrap key={index}>
          <h3>{item}</h3>
        </Wrap>
      ))}
    </div>
  );
};

const Wrap = styled.div`
  text-align: center;
  height: 50px;
  background-color: aliceblue;
`;

export default BucketList;
