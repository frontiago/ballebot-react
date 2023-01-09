import {GlobalStyles} from './components/styles/GlobalStyles'
import Menu from './components/Menu'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="wrapper">
      <GlobalStyles />      
      <Menu />
      <Header />  
      <Main />  
    </div>
  );
}

export default App;
