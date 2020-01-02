import React from 'react';
import './App.scss';
import { TodoItem } from './models/todo-item';

interface Props {}

interface State {
  list: Array<TodoItem>;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: []
    };

    fetch('http://localhost:3000/items')
      .then((result) => result.json())
      .then((list) => this.setState({list}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My first react app</p>
        </header>
        <ul>
          {this.state.list.map((element) => <li>{element.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
