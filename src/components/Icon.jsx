import React from 'react';

export default function Icon({ name }) {
  const icons = {
    arrow: 'M5 12h14M13 5l7 7-7 7',
    mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
    code: 'M9 18l-6-6 6-6M15 6l6 6-6 6',
    link: 'M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1',
    menu: 'M4 7h16M4 12h16M4 17h16',
    phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z',
    location: 'M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    download: 'M12 3v12m0 0l-4-4m4 4l4-4M4 21h16',
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d={icons[name]} />
    </svg>
  );
}
