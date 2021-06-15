//-------------------------------
// PostDetail Component
//-------------------------------
import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getPost } from '../../redux/action/postAction'
import history from '../../utils/history'
import Loading from '../common/loading'

const PostDetail = ({ match }) => {
  
  const _id = match.params.id

  const dispatch = useDispatch()
  const { post, loading, error } = useSelector(state => ({
    post: state.post.post,
    loading: state.post.loading,
    error: state.error.data
  }), shallowEqual)

  useEffect(() => {
    dispatch(getPost(_id))
  }, [dispatch, _id])
  
  if (error) {
    return (
      <div>
        {error.message}
      </div>
    )
  }

  return(
    <div>
      {
        loading ? <Loading /> : 
        <div>
          {post.title}
          {post.username}
          {post.message}
          {post.createdAt}
        </div>
      }
      <button onClick={() => history.push('/')}>go home</button>
    </div>
  )
}

export default PostDetail
