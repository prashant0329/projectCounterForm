import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
         <div > 
           <h1 className="shadow-lg font-bold text-3xl p-5 m-5">Counter App</h1>
          <CounterDisplay count = {this.state.count} />
          <CounterControls 
          onIncrement = {this.incrementCount}
          onDecrement = {this.decrementCount} 
          />
         </div>
    );
  }
}

class CounterDisplay extends Component {
  render(){
    return <h2 className="font-bold text-2xl p-5 m-5">Count:{this.props.count}</h2>;
  }
}

class CounterControls extends Component {
  render(){
    return(
      <div>
         <button className='bg-gray-500 p-2 m-2 rounded-md hover:bg-green-500 text-white'onClick={this.props.onIncrement}>Increment</button>
        <button className='bg-gray-500 p-2 m-2 rounded-md hover:bg-fuchsia-500 text-white'onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }

}
export default Counter;