import React from 'react';
import Item from './Item';
import links from './links.json';

export default function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex align-items-center px-5">
        <h1 className="logo me-auto">
          <a href="index.html">
            <span>Juju Genie </span> Club
          </a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            {links.map(({ id, ...rest }, i) => (
              <Item key={id} {...rest} index={i} />
            ))}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}
