import React from "react";
import ReactDOM from "react-dom";

class Componente extends React.Component {
  render() {
    return (
      <div>
        <p>Nome: {this.props.informacoes.nome}</p>
        <p>Idade: {this.props.informacoes.idade}</p>
        <p>Profissão: {this.props.informacoes.profissao}</p>
        <p>Filhos: {this.props.informacoes.filhos}</p>
      </div>
    );
  }
}

//JSON
var dados = {nome:'Júnior', idade:41, profissao:'dev', filhos:2};

// Dentro do componente, eu crio uma variável e chamo entre chaves outra variável
ReactDOM.render(
  <Componente informacoes={dados} />,
  document.getElementById("root")
);
