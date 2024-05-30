import './App.css'
import Formulario from './components/Formulario'
import Tabela from './components/Tabela'

function App() {

  return (
    <>
      <div className="container">
        <header>
          <h1>Calculadora de IMC</h1>
        </header>
        <Formulario/>
        <Tabela/>
      </div>
    </>
  )
}

export default App
