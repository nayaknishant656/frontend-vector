// src/components/nodes/NodeHeader.jsx

import React from 'react';

const NodeHeader = ({ title, icon }) => {
    return (
        <div className="node-header">
            {icon && (
                <span className="node-icon">
                    {icon}
                </span>
            )}
            <span className="node-title">
                {title}
            </span>
        </div>
    );
};

export default NodeHeader;