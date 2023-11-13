import MeuComponente from "./components/MeuComponent"

function App() {

  return (
    <div>
      <h1>Hello World!! - React</h1>
      <MeuComponente/>
      <Botao conteudo='clique aqui' />
      <Botao conteudo='depois aqui' />
      <Botao conteudo='por fim, aqui' />
    </div>
  )
}

function Botao(props) {
  return(<button>{props.conteudo}</button>)
}

export default App
