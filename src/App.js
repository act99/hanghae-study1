import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./bucket/BuckletList";
import styled from "styled-components";
import "./App.css";
import Nemo from "./nemo/Nemo";
import Text from "./circle/Text";

const App = () => {
  const [bucketlist, setBucketlist] = React.useState([
    "운동하기",
    "공부하기",
    "영화보기",
  ]);
  const [myname, setMyname] = React.useState("이주석");
  const text = React.useRef(null);
  const name = React.useRef(null);
  const circle = React.useRef(null);

  const addBucket = () => {
    setBucketlist([...bucketlist, text.current.value]);
  };
  const changeName = () => {
    setMyname(name.current.value);
  };
  return (
    <div className="App">
      <Container2>
        <Text />
      </Container2>

      {/* <Nemo /> */}

      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <BucketList props={bucketlist} />
      </Container>
      <InputBox>
        <Input type="text" ref={text} />
        <Button onClick={addBucket}>버튼</Button>
      </InputBox>
      <Container>
        <Title>
          나는<span>{myname}</span>에 대해서 얼마나 알고있을까?
        </Title>
        <Button onClick={changeName}>버튼</Button>
        <Input type="text" ref={name} />
      </Container>
    </div>
  );
};

const Container2 = styled.div`
  max-width: 350px;
  min-height: 40vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
  span {
    background-color: yellow;
  }
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const InputBox = styled.div`
  margin: auto;
  border: 1px, solid #ddd;
  max-width: 350px;
  min-height: 10vh;
  background-color: aliceblue;
`;

const Input = styled.input`
  margin-top: 20px;
`;

const Button = styled.button`
  display: block;
  margin: 20px auto;
  width: 90px;
  height: 50px;
`;

export default App;
