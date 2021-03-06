import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import GlobalNav from './globalNav'
import Home from './home'
import Signup from './signup'
import Login from './login'
import NoteList from './containers/notes/index'
import NoteForm from './containers/notes/new'
import NoteEdit from './containers/notes/edit'
import Note from './containers/notes/show'

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalNav />
        <div style={{ marginTop: 64 }}>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/notes" component={NoteList} />
            <PrivateRoute path="/notes/new" component={NoteForm} />
            <PrivateRoute path="/notes/:id/edit" component={NoteEdit} />
            <PrivateRoute path="/notes/:id" component={Note} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
