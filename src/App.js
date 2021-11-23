import './App.css';
import Main from './components/main';
import data from './data';
import Header from './components/header';
function App() {

  return (
    <section>
      <div className="Class">
        <h1><Header/></h1>
        <Main />
      </div>
    </section>
  );
}

export default App;
