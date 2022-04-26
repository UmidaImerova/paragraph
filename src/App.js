import { useState } from 'react';
import text from './data';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [paragraph, setPharagraph] = useState([])



  const handleSubmit=(e)=>{
    e.preventDefault();
    if (counter<0){
      return setCounter(0)
    } else if(counter> text.length){
      setCounter(text.length)
    }  setPharagraph(text.slice(0, counter)) 
  }


  return (
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleSubmit}>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <span>Paragraphs</span><input type='number' onChange={(e)=>setCounter(e.target.value)}></input> <button>GENERATE</button>
      <article>
          {paragraph.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        </article>
   
    </form>
    </div>
  );
}

export default App;
