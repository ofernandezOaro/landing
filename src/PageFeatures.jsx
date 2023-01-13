import React from 'react'

const PageFeatures = () => {
  return (
    <div className='features' id='features'>
      
      <div className='container'>
        <div className='container__title'>
          <div className='container__title_items'>
          <div className='line'/>
          <h2>What is A.R.S.?</h2>
          </div>
          <span>An unprecedented audiobook recording system, created by and for audiobook professionals, to transform the full production cycle.</span>
        </div>
        <div className='container__features'>
          <div>Team agenda clashes</div>
          <div>Limited opportunities to scale</div>
          <div>High costs due to staff hours</div>
          <div>Limited access to resources</div>
          <div>Multiple manual processes</div>
          <div>Limited studio availability</div>
        </div>
        <br/>
        <br/>
        <h3>We had to find a way to reduce these pains, and we did it.</h3>
      </div>
    </div>
  )
}

export default PageFeatures
