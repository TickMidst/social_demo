import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Formik } from "formik"
import * as yup from 'yup'



const MyPosts = (props) => {

  let postsElements = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount} />
  )

  let newPostElement = React.createRef();


  let onAddPost = (formikText) => {
    props.addPost(formikText)
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text)
  }


  const validateScheme = yup.object().shape({
    textOfMessage: yup.string().typeError('Должно быть строкой').min(1, 'Напиши хоть что то').max(10, 'Максимум 10 символов')
  })


  return  <div> 
  <div className={s.postsBlock}>
    <h3>My posts</h3>

    <div>
    <Formik
    initialValues={
      {
        textOfMessage: ''
      }
    }
    validateOnBlur
    onSubmit={(values)=> {onAddPost(values.textOfMessage)}}
    validationSchema = {validateScheme}
    >
      {
        ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => { 
          return (
          <div>
            <input
              type={'text'}
              name={'textOfMessage'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.textOfMessage}
            />
            {touched.textOfMessage && errors.textOfMessage && <p>{errors.textOfMessage}</p>}

            <button
                        disabled={!touched.textOfMessage}
                        onClick={handleSubmit}
                        type={'submit'}
                        >
                            Отправить
                        </button>

          </div>)
        }
      }

    </Formik>
    </div>


    <div className={s.posts}>
      {postsElements}
    </div>
    </div>

  <div>

    
  </div>

  </div>
}


export default MyPosts;