import styles from './UserCard.module.css'

type UsercardProps = {
  name: string,
  username: string,
  email: string,
  onClick: () => void,
}

export const UserCard = ({ name, username, email, onClick }: UsercardProps) => {
  const { cardWrapper } = styles;
  return (
    <div className={cardWrapper} onClick={onClick}>
      <div>
        <img src="#" alt="user icon" />
      </div>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: { email }</p>
    </div>
  )
}