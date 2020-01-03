import React from 'react';
import { TodoItem } from '../../models/todo-item';

interface Props {
}

interface State {
  item: TodoItem;
}

class NewItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      item: {} as TodoItem
    };
  }

  saveElement(value: any) {
    value.preventDefault();
    console.log(value);
    console.log(this.state.item);
  }

  handleChange(event: Event) {
    // this.setState({
    //   item: {
    //     title: event.target.value,
    //     completed: false
    //   }
    // });
    console.log(event.target.value)
  }

  render() {
    return (
      <form>
        <input type="text" value='' onChange={(e) => this.handleChange(e)}></input>
        <button type="submit" onClick={(e) => this.saveElement(e)}>Add</button>
      </form>
    );
  }
}

export default NewItem;