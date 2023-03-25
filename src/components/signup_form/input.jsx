import React from "react";
import PropTypes from "prop-types";

let Input = (props) => {
    return (
        <div className="">
            <label htmlFor={props.label} className="text-xl font-semibold">
                {props.label}:
            </label>
            <br />
            <input
                className="border-2 border-slate-500 px-2 py-1 w-full mt-1"
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
    type: "text",
    label: "",
    placeholder: ""
};

export default Input;
