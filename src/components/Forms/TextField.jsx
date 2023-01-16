import React from "react";

const TextField = ({ type, placeholder, value, onChange, src, alt, name, handleShowPassword }) => {
  return (
    <div>
      <div className="text-field">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className="wf-100"
        />
        <img src={src} alt={alt} onClick={handleShowPassword} className="pointer"/>
      </div>
    </div>
  );
};

export { TextField as default };
