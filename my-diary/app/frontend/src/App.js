import { Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import PostDetail from './components/post/PostDetail'
import PostForm from './components/post/PostForm'
import './css/App.css'
import history from './utils/history'

function App() {
  return (
    <div className="box">
      <Router history={ history }>
        <Header />
        <Switch>
          <Route path='/' component={ Home } exact={ true } />
          <Route path='/detail/:id' component={ PostDetail } />
          <Route path='/create' component={ PostForm } />
        </Switch>  
      </Router>
    </div>
  )
}

export default App
