import React, { ReactNode } from 'react';
import '../styles/Dropdown.css';

type ChildrenProp = {
    children: ReactNode;
    className: string;
};

const Dropdown = ({ children, className }: ChildrenProp) => {
    return <div className={`dropdown ${className}`}>{children}</div>;
};

export default Dropdown;
