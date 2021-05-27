import React from "react";
import "./styles.css";
import Timer from "./components/Timer";
import Action from "./components/Actions";

class App extends React.Component {
  constructor(timer) {
    super();
    this.timer = timer;
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      mlsec: 0
    };
  }

  handleStart = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          mlsec: prevState.mlsec + 1
        };
      });

      if (this.state.mlsec === 100) {
        this.setState((prevState) => {
          return {
            second: prevState.second + 1,
            mlsec: 0
          };
        });
      }
      if (this.state.second === 60) {
        this.setState((prevState) => {
          return {
            minute: prevState.minute + 1,
            second: 0
          };
        });
      }
      if (this.state.minute === 60) {
        this.setState((prevState) => {
          return {
            hour: prevState.hour + 1,
            minute: 0
          };
        });
      }
    }, 10);
  };
  handleStop = () => {
    clearInterval(this.timer);
  };
  handleReset = () => {
    this.setState(() => {
      return {
        hour: 0,
        minute: 0,
        second: 0,
        mlsec: 0
      };
    });
  };
  render() {
    return (
      <div>
        <Timer time={this.state} />
        <Action
          start={this.handleStart}
          stop={this.handleStop}
          reset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
