import { TodoItem } from '../models/todo-item';

export class ListService {

  getListItems(): Promise<TodoItem[]> {
    return fetch('http://localhost:3000/items')
      .then((result) => result.json());
  }

  saveListItem(item: TodoItem): Promise<void> {
    console.log(item)
    return fetch('http://localhost:3000/items',{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'content-type': 'application/json'
      }
    }).then(result => console.log(JSON.stringify(item)))
  }

  deleteItem(id: string): Promise<void> {
    return fetch(`http://localhost:3000/items/` + id, {
      method: 'DELETE'
    }).then(response => console.log(response))
  }

  editItem(item: TodoItem): Promise<void> {
    console.log(item)
    return fetch(`http://localhost:3000/items/` + item._id, {
      method: 'PUT',
      body: JSON.stringify({
        title: item.title,
        completed: item.completed
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => console.log(response))
  }



}
