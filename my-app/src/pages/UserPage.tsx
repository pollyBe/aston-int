import { UserTabs } from '@/features/UserTabs/UserTabs';
import { users } from '@/shared/lib/mocks/users';
import { GoBack } from '@/shared/ui/goBack/GoBack';
import { useParams, Outlet, Navigate, useLocation } from 'react-router-dom';


export const UserPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2>Пользователь не найден</h2>;
  }

  if (location.pathname === `/users/${id}`) {
    return <Navigate to={`/users/${id}/albums`} replace />;
  }

  return (
    <section>
      <GoBack/>
      <h1>{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <UserTabs />

      <div style={{ marginTop: '20px' }}>
        <Outlet />
      </div>
    </section>
  );
};
