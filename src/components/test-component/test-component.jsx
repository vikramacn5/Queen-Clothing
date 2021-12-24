import { Component } from 'react';

class TestComponent extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 5000);
  }

  render() {
    return (
      <div onClick={() => this.setState({ counter: 5 })}>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default TestComponent;
