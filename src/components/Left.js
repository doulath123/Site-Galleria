import React from 'react'

function Left() {
  return (
    <div className='left'>
        <div className='top-bar'>
           <button className='button'>AllSections</button>
           <button className='button'>PHYSICS</button>
           <button className='button'>CHEMISTRY</button>
           <button className='button'>MATHS</button>
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
                    <div className='question'>Content Section</div>
                </div>
                <div className='content'>
                    <div className='heading'>QUESTION</div>
                    <div className='question'>Question and Options</div>
                </div>
                
            </div>
        </div>
        <div className='buttons-bar'>
            <button className='button'>CLEAR RESPONSE</button>
            <button className='button'>REVIEW</button>
            <button className='button'>DUMP</button>
            <button className='button'>PREVIOUS</button>
            <button className='button'>NEXT</button>
        </div>
    </div>
  )
}

export default Left
