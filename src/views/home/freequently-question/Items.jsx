import React from 'react';

export default function Items({ summary, paragraph, index }) {
  const target = index + 1;
  const aos = index * 100;

  return (
    <li data-aos="fade-up" data-aos-delay={aos}>
      <i className="bx bx-help-circle icon-help" />
      <a
        data-bs-toggle="collapse"
        className={index === 0 ? 'collapse' : 'collapsed'}
        data-bs-target={`#faq-list-${target}`}
      >
        {summary} <i className="bx bx-chevron-down icon-show" />
        <i className="bx bx-chevron-up icon-close" />
      </a>
      <div
        id={`faq-list-${target}`}
        className={`collapse ${index === 0 ? 'show' : ''}`}
        data-bs-parent=".faq-list"
      >
        <p>{paragraph}</p>
      </div>
    </li>
  );
}
