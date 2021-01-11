import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Gallery from './Components/Gallery/Gallery';
import Animation from './Components/Animation/Animation';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/animation" component={Animation} />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;