import React from "react";

export default function Icon({ icon, className, width, height, onClick }){
    return (
        <img
            src={icon}
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        />
    );
};
