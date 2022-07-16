import React from 'react';
import Item from './Item';
import teams from './data.json';

export default function Team() {
  return (
    <section
      id="team"
      className="team section-bg ssdd"
      data-parallax="scroll"
      data-image-src="assets/img/team_bg.jpeg"
    >
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <h2 className="text-white">Team members</h2>
        </div>
        <div className="row">
          <div className="col-md-1" />
          {teams.map(({ id, ...rest }) => (
            <Item {...rest} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
