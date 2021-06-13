import PostList from "./PostList"

const PostContainer = ({ posts }) => {

  return (
    <div className="post-box">
    { posts && posts.map(post => (
      <PostList posts={ post } key={ post._id } />
    )) }
    </div>
  )
}

export default PostContainer 
