import logo from './logo.svg';
import './App.css';
import Main from './components/main/main';
import React, { useState } from 'react'

function App() {
  const [question, setQuestion] = useState([{"id":49135,"answer":"the tulip","question":"Each year, Holland, Michigan holds a festival honoring this flower","value":null,"airdate":"2002-03-11T12:00:00.000Z","created_at":"2014-02-11T23:15:48.182Z","updated_at":"2020-09-23T17:29:17.276Z","category_id":6148,"game_id":null,"invalid_count":6,"category":{"id":6148,"title":"fun with flowers","created_at":"2014-02-11T23:15:47.646Z","updated_at":"2014-02-11T23:15:47.646Z","clues_count":5}}])
  const getNewQuestion = async () => {
    try{const newQuestion = await fetch("http://jservice.io/api/random")
    const parsedResponse = await newQuestion.json()
    setQuestion([...parsedResponse])
  }catch(err){
    console.log(err)
  }
  }
  return (
    <div className="App">
      <Main question={question} getNewQuestion={getNewQuestion}></Main>
    </div>
  );
}

export default App;
