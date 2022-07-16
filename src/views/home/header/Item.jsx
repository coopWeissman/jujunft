import React from 'react';

export default function Item({ index, href, icon, text }) {
  return (
    <li>
      <a
        target={icon ? '_blank' : '_self'}
        className={`nav-link scrollto ${index === 0 ? 'active' : ''}`}
        href={href}
      >
        {text}
        {icon && <i className={icon} />}
      </a>
    </li>
  );
}
