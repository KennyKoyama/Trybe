import './App.css';
import { connect } from 'react-redux';
import { toggleStatus, toggleTheme } from './redux/actions';

function App({ theme, status, changeTheme, changeStatus }) {
  return (
    <div className={`container ${ theme }`}>
      <h1>Minha Aplicação</h1>
      <p>Status: Você está <span id="status" className={ status }>{ status }</span></p>
      <button id="toggle-theme" onClick={ changeTheme }>
        <span>
          {
            theme
              .split('')
              .map((letter, i) => i < 1 ? letter.toUpperCase() : letter)
          }
        </span>
        {' '}
        Mode
      </button>
      <button id="toggle-status" onClick={ changeStatus }>
        Ficar
        {' '}
        <span>{
          status
            .split('')
            .map((letter, i) => i < 1 ? letter.toUpperCase() : letter)
        }</span>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  status: state.status,
})

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => dispatch(toggleTheme()),
  changeStatus: () => dispatch(toggleStatus()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
