import React from 'react';
import './list-manager.scss';
import { TodoItem } from '../../models/todo-item';
import { ListService } from '../../services/list-service';
import NewItem from '../new-item-input/new-item';
import { ListItem } from '../list-item/list-item';

interface Props {}

interface State {
  list: Array<TodoItem>;
}

class ListManager extends React.Component<Props, State> {
  service: ListService;

  constructor(props: Props) {
    super(props);
    this.state = {
      list: []
    };

    this.service = new ListService();

    this.service.getListItems().then((list) => this.setState({list}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Todo list</p>
        </header>
        <NewItem/>
        <div>
          {this.state.list.map((element) => <ListItem key={element._id} element={element}/>)}
        </div>
      </div>
    );
  }
}

export default ListManager;
