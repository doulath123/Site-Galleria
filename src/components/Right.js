import React, {useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DesignContext } from '../Context/DesignContext'

function Right() {
   const [state, dispatch]=useContext(DesignContext)
    const [isDesign]=useContext(DesignContext)
    const bgcolor=isDesign.isDesign
    const id=useLocation()
    const changecolor=(e)=>{
dispatch({
    type:e
})
    }
  return (
    <div className='right'>
        <div className='top-box'>
            <img src='profile.jpg' alt='profile-photo'/>
            <div>
                <div className='time'><span  className='left'>Time Left:</span><span className='right'> 02:39:29</span></div>
                <div className='name'>Ashish Kumar</div>
            </div>
        </div>
        <div className='middle-box'>
            <div className='title-bar'>Question Pallete</div>
            <div className='content'>
                <Link to={`${id.pathname}?q=1`} className="link" ><button style={{backgroundColor: id.search=="?q=1" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>1</button></Link>
                <Link to={`${id.pathname}?q=2`} className="link"><button style={{backgroundColor: id.search=="?q=2" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>2</button></Link>
                <Link to={`${id.pathname}?q=3`} className="link"><button style={{backgroundColor: id.search=="?q=3" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>3</button></Link>
                <Link to={`${id.pathname}?q=4`} className="link"><button style={{backgroundColor: id.search=="?q=4" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>4</button></Link>
                <Link to={`${id.pathname}?q=5`} className="link"> <button style={{backgroundColor: id.search=="?q=5" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>5</button></Link>
                <Link to={`${id.pathname}?q=6`} className="link"> <button style={{backgroundColor: id.search=="?q=6" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>6</button></Link>
                <Link to={`${id.pathname}?q=7`} className="link"><button style={{backgroundColor: id.search=="?q=7" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>7</button></Link>
                <Link to={`${id.pathname}?q=8`} className="link"><button style={{backgroundColor: id.search=="?q=8" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>8</button></Link>
                <Link to={`${id.pathname}?q=9`} className="link"> <button style={{backgroundColor: id.search=="?q=9" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>9</button></Link>
                <Link to={`${id.pathname}?q=10`} className="link"> <button style={{backgroundColor: id.search=="?q=10" ? bgcolor :"default"}} onClick={()=>{changecolor("default")}}>10</button></Link>
            </div>
        </div>
        <div className='bottom-box'>
        <div className='title-bar'>Legend (Click to View)</div>
        <div className='content'>
           <div className='answer'>Answer</div>
           <div className='noanswer'>No Answer</div>
           <div className='reviewp'>Review+Ans</div>
           <div className='reviewn'>Review-Ans</div>
           <div className='dump'>Dump</div>
           <div className='novisit'>No Visit</div>
            
        </div>
        <div className='bottom'>10m All Questions</div>
        <hr className='line'/>
        <div className='buttons-continer'>
            <div className='button-bar'>
                <button>Profile</button>
                <button>Instr</button>
            </div>
            <div className='button-bar'>
                <button>Profile</button>
                <button>Instr</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Right
