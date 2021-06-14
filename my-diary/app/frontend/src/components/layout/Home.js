//-------------------------------
// Home Component
//-------------------------------

import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchList } from '../../redux/action/postAction'
import Loading from '../common/loading'
import PostContainer from '../post/PostContainer'

const Home = () => {

  const dispatch = useDispatch()

  const { posts, loading } = useSelector(state => ({
    posts: state.post.posts,
    loading: state.post.loading
  }), shallowEqual)

  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  return(
    <>
    { loading ? <Loading /> : <PostContainer posts={ posts } /> }
    </>
  )
}

export default Home