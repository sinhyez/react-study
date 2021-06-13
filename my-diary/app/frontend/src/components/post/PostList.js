import { Link } from 'react-router-dom'

const PostList = ({ posts }) => {
  return (
    <li key={ posts._id }>
      <Link to={ `/detail/${posts._id}` }>{ posts.title }</Link>
    </li>    
  )
}

export default PostList