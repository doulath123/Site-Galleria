import React, {useContext} from 'react'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import { DesignContext } from '../Context/DesignContext'

function Left() {
    const [state, dispatch]=useContext(DesignContext)
    const id=useLocation()
    const changecolor=(e)=>{
dispatch({
    type:e
})
    }
  return (
    <div className='left'>
        <div className='top-bar'>
            
          <Link to="/" className='link' > <button className='button' style={{backgroundColor: id.pathname=="/" ? 'blue' :"#457eb8"}}>AllSections</button></Link>
           <Link to="/physics" className='link'><button className='button'style={{backgroundColor: id.pathname=="/physics" ? 'blue' :"#457eb8"}}>PHYSICS</button></Link>
          <Link to="chemistry" className='link'><button className='button' style={{backgroundColor: id.pathname=="/chemistry" ? 'blue' :"#457eb8"}}>CHEMISTRY</button></Link>
          <Link to='maths' className='link'><button className='button' style={{backgroundColor: id.pathname=="/maths" ? 'blue' :"#457eb8"}}>MATHS</button></Link>
        </div>
        <hr/>
        <div className='question-box'>
            <div className='top-bar'>
                <div className='q-no'>Q No.:1</div>
                <div className='language'>
                    <div className='view-language'>View in:</div>
                <select>
    <option>English</option>
    <option>Hindi</option>
  </select>
                </div>
            </div>
            <div className='question-paper'>
                <div className='content'>
                    <div className='heading'>QUESTION INSTRUCTION</div>
                    <div className='question'>
                   
            <Routes>
            <Route path='/' element={<div>All Section</div>}/>
            <Route path='/physics' element={<div>Physics Section</div>}/>
            <Route path='/chemistry' element={<div>Chemistry Section</div>}/>
            <Route path='/maths' element={<div>Maths Section</div>}/>
            </Routes>
            
                    </div>
                </div>
                <div className='content'>
                    <div className='heading'>QUESTION</div>
                    <div className='question'>Question and Options</div>
                </div>
                
            </div>
        </div>
        <div className='buttons-bar'>
            <button className='button'>CLEAR RESPONSE</button>
            <button className='button' onClick={()=>{changecolor("Review")}}>REVIEW</button>
            <button className='button' onClick={()=>{changecolor("Dump")}}>DUMP</button>
            <button className='button' >PREVIOUS</button>
            <button className='button' onClick={()=>{changecolor("Next")}}>NEXT</button>
        </div>
    </div>
  )
}

export default Left
