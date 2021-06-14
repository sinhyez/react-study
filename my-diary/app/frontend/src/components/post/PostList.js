//-------------------------------
// PostList Component
//-------------------------------

import { Link } from 'react-router-dom'

const PostList = ({ posts }) => {
  return (
    <section className="main-list">
      <li key={ posts._id }>
        <Link to={ `/detail/${posts._id}` }>{ posts.title }</Link>
      </li>
    </section>    
  )
}

export default PostList