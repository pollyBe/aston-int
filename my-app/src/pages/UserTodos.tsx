import { todos } from '@/shared/lib/mocks/todos';
import { useParams } from 'react-router-dom';


export const UserTodos = () => {
  const { id } = useParams();
  const userTodos = todos.filter((t) => t.userId === Number(id));

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {userTodos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly /> {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
