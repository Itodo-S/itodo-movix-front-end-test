import React from "react";

const TextField = ({ type, placeholder, value, onChange, src, alt }) => {
  return (
    <div>
      <div className="text-field">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="wf-100"
        />
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export { TextField as default };
