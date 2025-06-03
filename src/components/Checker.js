import React from 'react';

function Checker({ sites, colors }) {
  return (
    <ul id="checker">
      {sites.map((item, index) => (
        <li key={index}>
          <img
            src={`${item.src}?${Date.now()}`} // Add timestamp to prevent caching
            alt={item.name}
            onLoad={(e) => (e.target.style.borderColor = colors.onload)}
            onError={(e) => (e.target.style.borderColor = colors.onerror)}
          />
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Checker;
