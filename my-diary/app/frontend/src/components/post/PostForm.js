//-------------------------------
// PostFrom Component
//-------------------------------
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/action/postAction'
import useInput from '../../utils/useInput'

const PostForm = () => {

  const dispatch = useDispatch()
  const [value, setValue] = useInput({
    title: '',
    username: '',
    message: ''
  })

  const submitHandelr = useCallback(
    (e) => {
      e.preventDefault()
      dispatch(addPost(value))
    },
    [dispatch, value],
  )

  console.log('title: ' ,value.title, 'username: ', value.username, 'message: ', value.message)

  return (
   <div>
     <form onSubmit={ submitHandelr }>
       title <input type="text" name='title' value={value.title} onChange={setValue} />
       username <input type="text" name='username' value={value.username} onChange={setValue} />
       message <input type="text" name='message' value={value.message} onChange={setValue} />
       <button>submit!</button>
     </form>
   </div> 
  )
}

export default PostForm