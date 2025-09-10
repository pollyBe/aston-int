import { UserCard } from "@/entities/userCard/UserCard"
import { users } from "@/shared/lib/mocks/users"
import styles from './UsersPage.module.css'
import { useNavigate } from "react-router-dom"
import { GoBack } from "@/shared/ui/goBack/GoBack"

export const UsersPage = () => {
  const navigate = useNavigate()
  const { container, usersWrap } = styles

  function navigationHandler(id:number) {
    navigate( `/users/${id}`)
  }
  return (
    <section className={container}>
      <GoBack/>
      <h1>Users Page</h1>
      <div className={usersWrap}>
        {users.map((user) => {
          return <UserCard key={user.id} name={user.name} username={user.username} email={user.email} onClick={() => navigationHandler(user.id)}/>
          })}
      </div>
    </section>
  )
}