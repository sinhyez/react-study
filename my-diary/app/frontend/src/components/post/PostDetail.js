import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getPost } from '../../redux/action/postAction'

const PostDetail = ({ match }) => {
  
  const _id = match.params.id

  const dispatch = useDispatch()
  const { post, loading } = useSelector(state => ({
    post: state.post.post,
    loading: state.post.loading
  }), shallowEqual)

  useEffect(() => {
    dispatch(getPost(_id))
  }, [dispatch, _id])
  
  
  return(
    <div>
      {
        loading ? <span> loading... </span> : 
        <div>
          {post.title}
          {post.username}
          {post.message}
          {post.createdAt}
        </div>
      }
      <Link to='/'>
          go back
      </Link>
    </div>
  )
}

export default PostDetail
