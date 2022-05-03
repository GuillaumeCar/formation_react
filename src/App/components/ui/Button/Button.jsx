import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
    console.log(props);
    return (
        <button
            className={style.Button}
            style={{
                ...props.style,
                backgroundColor: props.bgColor,
                color: props.textColor,
            }}
            type={props.type}
            onClick={(evt) => {
                props.onButtonClick();
            }}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    onButtonClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    type: "button",
    onButtonClick: () => {},
};

export default Button;
