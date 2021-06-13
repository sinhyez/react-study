import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchList } from '../../redux/action/postAction'
import PostContainer from '../post/PostContainer'

const Home = () => {

  const dispatch = useDispatch()
  const { posts, loading } = useSelector(state => ({
    posts: state.post.post[0],
    loading: state.post.loading
  }), shallowEqual)

  console.log(posts)

  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  return(
    <>
    { loading ? <span>loading</span> : <PostContainer posts={ posts } /> }
    </>
  )
}

export default Home