import React from "react";
import "../css/Glass.css";

const Glass = ({ children, title }) => {
    return (
        <div className="glass">
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default Glass;
