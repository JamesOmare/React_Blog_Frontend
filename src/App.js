// import React { Component } from "react";
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Posts from './components/Posts'
import { Component } from 'react';
import { useEffect, useState } from 'react';
import PostLoadingComponent from './components/PostLoading'
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';


function App () {

  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  })

  useEffect(() => {
    setAppState({ loading: true })
    const apiURL = 'http://127.0.0.1:8000/api/';
    fetch(apiURL)
        .then((response) => response.json())
        .then((posts) => {
          setAppState({loading: false, posts : posts})
        })
  }, [setAppState])


  const BlogPost = () => (
    <div>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  )


    return (
      <>
       <Routes>

        <Route  path='/' element={[<Header/>, <BlogPost />, <Footer/>, ]}/>
        <Route  path='/register' element={[<Header/>, <Register />, <Footer/>, ]}/>
        <Route  path='/login' element={[<Header/>, <Login />, <Footer/>, ]}/>
        <Route  path='/logout' element={[<Header/>, <Logout />, <Footer/>, ]}/>
    
      </Routes>
      
      </>
      
    );

 
}

export default App;