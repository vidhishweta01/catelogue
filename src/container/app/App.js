import { Switch, Route } from 'react-router-dom';
import './App.css';
import pokeList from '../pokelist';
import Search from '../../component/search/search';
import PokeInfo from '../../component/pokeInfo';
import Navbar from '../../component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/pokemon/:pokemon/:id" component={PokeInfo} />
        <Route path="/pokelist" component={pokeList} />
      </Switch>
    </div>
  );
}

export default App;
