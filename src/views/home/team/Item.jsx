import React from 'react';

export default function Item({ effect, name, title, icons }) {
  return (
    <div className="col-lg-4 text-center mt-4 mx-auto">
      <div className="kk" >
        <img src="assets/img/lightning.png" className="one" />
        <img src={effect} alt="" className="two" />
      </div>
      <div className="member-info">
        <h4>{name}</h4>
        <span>{title}</span>
        {icons && (
          <div className="social">
            {icons.map(({ icon, url }, i) => (
              <a href={url} key={i}>
                <i className={icon} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
