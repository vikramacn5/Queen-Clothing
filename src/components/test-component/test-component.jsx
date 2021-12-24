import { connect } from 'react-redux';

const TestComponent = ({ test }) => {
  console.log('testing', test);
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('test component rerendering');
  return {
    test: state.test,
  };
};

export default connect(mapStateToProps)(TestComponent);
