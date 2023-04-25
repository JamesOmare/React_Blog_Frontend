// import React { Component } from "react";
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content';
import Posts from './components/Posts'
import { Component } from 'react';
import { useEffect, useState } from 'react';
import PostLoadingComponent from './components/PostLoading'
import UseEffectOnce from './components/UseEffectOnce'



const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)


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


 


    return (
      <>
       <Routes>
        <Route  path='/' element={

          [
          <Header/>,

          <div className="App">
            <h1>Latest Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
          </div>,

          <Footer/>, ]
          
          
          }/>
        
         
      </Routes>
      
      </>
      
    );

 
}

export default App;