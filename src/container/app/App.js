import { Switch, Route } from 'react-router-dom';
import './App.css';
// import pokeList from '../pokelist';
import Search from '../../component/search';
import PokeInfo from '../../component/pokeInfo';
import Navbar from '../../component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/pokemon/:pokemon/:id" component={PokeInfo} />
      </Switch>
    </div>
  );
}

export default App;
