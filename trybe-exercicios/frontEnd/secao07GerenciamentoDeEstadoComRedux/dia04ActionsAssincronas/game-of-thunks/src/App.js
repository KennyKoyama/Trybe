import './App.css';
import { connect } from 'react-redux';
import { fetchInfo, handleChangeInput } from './redux/actions';

function App({ info, inputValue, newFetch, handleChange }) {
  console.log('INFO', info)
  return (
    <div className="App">
      <h1>Game of Thunks</h1>
      <input
        type="text"
        value={ inputValue }
        onChange={ ({ target }) => handleChange(target.value) } />
      <button type="button" onClick={ () => newFetch(inputValue) }>Search</button>
      {
        info.name
          ? (
            <section>
              <p>Name: <span>{ info.name }</span>.</p>
              <ul>Aliases: { info.aliases.map((alias) => <li>{ alias }</li>) }</ul>
              <p>Gender: <span>{ info.gender }</span>.</p>
              <p>Born: <span>{ info.born }</span>.</p>
              <p>Played by: <span>{ info.playedBy.join(', ') }</span>.</p>
              <ul>Titles: { info.titles.map((title) => <li>{ title }</li>) }</ul>
              <ul>TV Series: { info.tvSeries.map((season) => <li>{ season }</li>) }</ul>
            </section>
            )
          : null
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  info: state.info,
  inputValue: state.inputValue,
})

const mapDispatchToProps = (dispatch) => ({
  newFetch: (charName) => dispatch(fetchInfo(charName)), 
  handleChange: (value) => dispatch(handleChangeInput(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
