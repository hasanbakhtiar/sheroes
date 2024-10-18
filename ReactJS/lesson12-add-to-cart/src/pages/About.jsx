import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
<div className="container px-4 py-5" id="featured-3">
  <h2 className="pb-2 border-bottom">Columns with icons</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="feature col">
    
      <h3 className="fs-2 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link">
        Call to action
        <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
      </a>
    </div>
    <div className="feature col">
  
      <h3 className="fs-2 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link">
        Call to action
        <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
      </a>
    </div>
    <div className="feature col">
    
      <h3 className="fs-2 text-body-emphasis">Featured title</h3>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" className="icon-link">
        Call to action
        <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
      </a>
    </div>
  </div>
</div>

    </Container>
  )
}

export default About