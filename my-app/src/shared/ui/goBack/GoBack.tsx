import { useNavigate } from "react-router-dom"

export const GoBack = () => {
  const navigate = useNavigate()
  return (
    <button style={{ cursor: 'pointer', padding: '0.3rem'}} onClick={() => navigate(-1)}>go back</button>
  )
}