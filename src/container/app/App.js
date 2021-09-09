import { Switch, Route } from 'react-router-dom';
import './App.css';
import pokeList from '../pokelist';
import poke from '../../component/poke';
import Navbar from '../../component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={pokeList} exact />
        <Route path="/pokemon/:pokemon/:id" component={PokeInfo} />
      </Switch>
    </div>
  );
}

export default App;
