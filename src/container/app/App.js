import { Switch, Route } from 'react-router-dom';
import './App.css';
import pokeList from '../../component/pokelist/pokelist';
import poke from '../../component/poke';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={pokeList} exact />
        <Route path="/pokemon/:pokemon" component={poke} />
      </Switch>
    </div>
  );
}

export default App;
