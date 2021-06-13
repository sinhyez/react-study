import { Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import PostDetail from './components/post/PostDetail'
import './css/App.css'
import history from './history'

function App() {
  return (
    <div className="box">
      <Header />
      <Router history={ history }>
        <Switch>
          <Route path='/' component={ Home } exact={ true } />
          <Route path='/detail/:id' component={ PostDetail } />
        </Switch>  
      </Router>
    </div>
  )
}

export default App
