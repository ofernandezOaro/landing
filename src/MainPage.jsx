import React from 'react'

const MainPage = () => {
  return (
    <div className="page" id='welcome'>
      <div className="gradient"/>
        <div className='hero'>
          <div className="wrapper">
          <div className='wrapper__logo'>
            <img src={"/ARSBlanco02@3x.png"} className="App-logo" alt="logo" />
          </div>
          <div className='wrapper__title'>
            <h1>Producing audiobooks like never before</h1>
          </div>
          <div className='wrapper__description'>
            <span>Revolutionary B2B SaaS for the audiobook production industry by <span id="span-multibooks">miutbooks</span></span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default MainPage
