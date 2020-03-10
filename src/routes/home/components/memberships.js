// IMPORTS --------------
// imports : Node Modules
import React from 'react';
import './memberships.css';

function memberships() {
  return (
    <React.Fragment>
      <section className='section'>
        <div className='memberships'>
          <h3>A creative collab space for content creators </h3>
          <h6>We are located at ...you guessed it, 484 Rideau, Ottawa ON. </h6>
          <p>
            When you work as many hours as you sleep, it’s important to love
            where you work. After working remotely in noisy coffee shops and
            being socially isolated at home, we realized the need for a better
            alternative. Our goal at Coworkly is to create a happy work
            environment where social isolation and distractions are eliminated
            and friendships and productivity thrive.
            <span id='read-more'>
              &nbsp;
              <a
                class=''
                data-toggle='collapse'
                href='#multiCollapseExample1'
                role='button'
                aria-expanded='false'
                aria-controls='multiCollapseExample1'>
                Read More.
              </a>
            </span>
            <div class='collapse multi-collapse' id='multiCollapseExample1'>
              When you work as many hours as you sleep, it’s important to love
              where you work. After working remotely in noisy coffee shops and
              being socially isolated at home, we realized the need for a better
              alternative. Our goal at Coworkly is to create a happy work
              environment where social isolation and distractions are eliminated
              and friendships and productivity thrive. When you work as many
              hours as you sleep, it’s important to love where you work. After
              working remotely in noisy coffee shops and being socially isolated
              at home, we realized the need for a better alternative. Our goal
              at Coworkly is to create a happy work environment where social
              isolation and distractions are eliminated and friendships and
              productivity thrive.
            </div>
          </p>
          <button className='apply-button'>Apply Now</button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default memberships;
