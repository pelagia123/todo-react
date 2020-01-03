import { TodoItem } from '../models/todo-item';

export class ListService {

  getListItems(): Promise<TodoItem[]> {
    return fetch('http://localhost:3000/items')
      .then((result) => result.json());
  }

}
