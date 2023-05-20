import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface T {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as T;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodoData(id, title, completed);
});

const logTodoData = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo ID: ${id}
  The todo title: ${title}
  Is it finished? ${completed}
  `);
};
