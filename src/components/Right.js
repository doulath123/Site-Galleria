import React from 'react'

function Right() {
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
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
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
