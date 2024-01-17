//sessão de estilos css
import './App.css';

//sessão de importação de componentes
import PrimeiroComponente from './componentes/PrimeiroComponente';
import TemplateComponente from './componentes/TemplateExpressoes'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos de React</h1>
      <PrimeiroComponente/>
      <TemplateComponente/>
    </div>
  );
}

export default App;
