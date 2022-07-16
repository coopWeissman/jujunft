import React from 'react';
import Items from './Items';
import qns from './qns.json';

export default function FreequentlyQuestion() {
  return (
    <section id="faq" className="faq section-bg pt-5 pb-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <ul>
            {qns.map(({ id, ...rest }, i) => (
              <Items key={id} {...rest} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
