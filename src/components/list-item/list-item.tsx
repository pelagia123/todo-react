import React from 'react';
import { TodoItem } from '../../models/todo-item';
import { ListService } from '../../services/list-service';
import './list-item.scss';

interface Props {
  element: TodoItem
}

interface State {
  element: TodoItem;
}

export class ListItem extends React.Component<any, any> {
  service = new ListService();

  constructor(props: Props) {
    super(props);
    this.state = {
      element: {...props}
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleTick = this.handleTick.bind(this)
  }

  handleClick(id: string) {
    this.service.deleteItem(id);
    console.log(id)
  }

  handleTick() {
    this.setState({
      element: {
        ...this.state.element,
        completed: !this.state.element.completed
      },
    });
    this.service.editItem(this.state.element);
  }

  render() {
    return (
    <div className="todo-item">
      <div>
        <input type="checkbox"
               id={"todoitem-" + this.props.element._id}
               onChange={this.handleTick}
               checked={this.state.element.completed}
        ></input>
        <label>{this.props.element.title}</label>
      </div>
      <button onClick={this.handleClick.bind(this, this.props.element._id)}>DELETE </button>
    </div>
  )
  }
}