import './App.css';
import { connect } from 'react-redux';
import { nextColor, previousColor, randomColor } from './redux/actions';

function App({ colors, index, next, previous, random }) {
  console.log(index)
  return (
    <div id="container" style={{backgroundColor: colors[index]}}>
      <p style={ { backgroundColor: 'white' } }>
        Color: <span id="value">{ colors[index] }</span>
      </p>
      <button id="previous" onClick={ previous }>Previous color</button>
      <button id="next" onClick={ next }>Next color</button>
      <button id="random" onClick={ random }>Random color</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  colors: state.colors,
  index: state.index,
})

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch(nextColor()),
  previous: () => dispatch(previousColor()),
  random: () => dispatch(randomColor()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
