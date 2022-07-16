import React from 'react';

export default function VideoSection() {
  return (
    <section id="bg-3" className="section responsive-bg" style={{ paddingBottom: 0 }}>
      <div className="ovelay" />
      <div className="container-fluid" data-aos="fade-down">
        <div className="row">
          <div className="col-md-12 mx-auto text-center px-3 pb-0">
            <video controls id="video1" muted autoPlay>
              <source src="assets/video/lamp.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="row ps-1 align-items-center">
          <div className="col-lg-6 text-start" data-aos="zoom-in" data-aos-delay={200}>
            <img
              src="assets/img/jujugif.gif"
              className="animated"
              style={{ maxWidth: '100%' }}
              alt=""
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <p className="hero-p">
              Over 3,000 years ago a spell was cast that imprisoned 10,000 genies in a single gold
              lamp. These genies had become forgotten, lost, and hopeless. It was until very
              recently that something has changed. For the first time in 3 millennia the lamp is
              stirring, the lamp is shaking, and the lamp is ready to explode. The JuJu Genies are
              coming…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
