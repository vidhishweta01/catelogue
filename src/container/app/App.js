import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={} exact />
        <Route path="/pokemon/:pokemon" component={} />
      </Switch>
    </div>
  );
}

export default App;
