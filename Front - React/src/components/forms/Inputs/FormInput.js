import React from 'react';

const FormInput = ({ id, label, type, name, value, onChange, required }) => {
    return (
        <div>
        <label htmlFor={id} className="sr-only">{label}</label>
        <input 
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="mb-2 appearance-none rounded-md relative block w-full px-4 py-2 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold"
            placeholder={label}
        />
        </div>
    );
};

export default FormInput; 