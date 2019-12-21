import { incrementCounter } from "./action";
import { connect } from "react-redux";
import Home from ".";

const mapStateToProps = ({ count }) => ({
  count
});

const mapDispatchToProps = dispatch => ({
  updateCount: value => {
    dispatch(incrementCounter(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
