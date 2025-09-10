import { useNavigate } from "react-router-dom"

export const AlbumPhotos = () => {
  const navigate = useNavigate()
  return (
    <>
    <div onClick = {()=> navigate(-1)}>go back</div>
      <div>Album Photos</div>
      </>
  )
}