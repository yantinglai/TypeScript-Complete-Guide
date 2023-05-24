import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increase</button>
        <button onClick={this.onDecrement}>Decrease</button>
        {this.state.counter}
      </div>
    );
  }
}
ReactDOM.render(<App color="red" />, document.querySelector('#root'));

// class App extends React.Component<AppProps> {
//   render() {
//     return <div> {this.props.color} </div>;
//   }
// }
// ReactDOM.render(<App />, document.querySelector('#root')); // you can also define the variable in the interface as optional

// react.Component 函数：要么先定义借口，接着把数据传到react.Component里面
// 要么就是直接在 react.Component 里面直接定义这个state / prop
