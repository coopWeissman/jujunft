import React from 'react';

export default function Hero() {
  return (
    <section className="hero-zoom-in d-flex align-items-center" id="hero">
      <div className="flex-slider">
        <ul className="slides">
          <li>
            <div
              className="slide-image slide-bg-1"
              data-bg="assets/img/jujuback.jpg"
              data-flex-start="center center "
            />
            <div className="hero-area-table">
              <div className="hero-area-tablecell">
                <div className="container">
                  <div className="row" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
