import LifecycleEx from "./lifecycleEx";
import React from "react";
import BucketList from "./bucket/BuckletList";
import "./styles/style.css";
// function App() {
//   const [ars, setArgs] = React.useState(true);
//   let name = "jooseok";
//   return (
//     <div className="App">
//       <BucketList />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["영화관 가기", "매일 책 읽기", "수영 배우기"],
    };
  }
  render() {
    console.log(this.state.list);
    return (
      <div className="App">
        <div className="container">
          <h1 className="h1">버킷리스트</h1>
          <hr className="line" />
          <BucketList list_a={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
