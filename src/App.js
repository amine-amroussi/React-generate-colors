import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color , setColor ] = useState("");
  const [error , setError ] = useState(false);
  const [list , setList] = useState(new Values("#456AD4").all(10));

  const handleSubmit = (e)=> {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true)
    }
  }

  const handleChange = (e)=> {
    setColor(e.target.value)
  }

  return <>
    <section className="container" >
      <h3>Color generator </h3>
      <form onSubmit={handleSubmit} >
        <input type="text" value={color} onChange={handleChange} placeholder="#456AD4" className={`${error ? "error" : "valid" }`} />
        <button type="submit" onSubmit={handleSubmit} className="btn" >
          Generate
        </button>
      </form>
    </section>
    <section className="colors" >
      {
        list.map((color , index) => {
         return <SingleColor key={index} {...color} index={index} />
        })}
    </section>
  </>
}

export default App
