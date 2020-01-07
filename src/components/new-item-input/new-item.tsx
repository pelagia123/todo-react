import React from 'react';
import { TodoItem } from '../../models/todo-item';
import { ListService } from '../../services/list-service';

interface Props {
}

interface State {
  item: TodoItem;
}

class NewItem extends React.Component<Props, State> {
  service: ListService;

  constructor(props: Props) {
    super(props);
    this.state = {
      item: {} as TodoItem
    };

    this.service = new ListService();

    this.handleChange = this.handleChange.bind(this)
    this.saveElement = this.saveElement.bind(this)
  }

  saveElement(value: any) {
    value.preventDefault();
    // console.log(value);
    // console.log(this);

    this.service.saveListItem(this.state.item)
  }

  handleChange(event: any) {
    this.setState({
      item: {
        title: event.target.value,
        completed: false
      }
    });
    console.log(event.target.value)
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.item.title} onChange={this.handleChange}></input>
        <button type="submit" onClick={this.saveElement}>Add</button>
      </form>
    );
  }
}

export default NewItem;