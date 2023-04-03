import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import MutantOptions from './MutantOptions';
import { selectMutant, showMutant } from '../redux/actions';

class SelectOmega extends React.Component {
  render() {
    const { show, select, showMut } = this.props;

    if (show) return <Card />;

    return (
      <div className="form-mutant">
        <div className="mutant-input">
          <h2>Selecione o mutante nível Ômega</h2>
          <div>
            <select
            onChange={ ({ target }) => select(target.value) }
            >
              <MutantOptions />
            </select>
            <div>
              <button
                type="button"
                onClick={ showMut }
              >
                Selecionar
              </button>
            </div>
          </div>
          <p className="intro">
            Nível Ômega: Habilidade super desenvolvida que alcançou um nível
            insuperável na classificação da habilidade.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // Implemente aqui de modo que a aplicação tenha acesso à chave `show` do estado global
  show: state.show,
})

const mapDispatchToProps = (dispatch) => ({
  select: (value) => dispatch(selectMutant(value)),
  showMut: () => dispatch(showMutant(true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectOmega);
