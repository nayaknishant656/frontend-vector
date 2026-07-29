// src/components/nodes/BaseNode.jsx

import React, { memo } from "react";
// import "./node.css";

import NodeHeader from "./Nodeheader";
import NodeHandles from "./NodeHandles";
import DynamicFields from "./DynamicFields";

const BaseNode = ({
    id,
    data = {},
    selected = false,
    config,
}) => {
    if (!config) return null;

    const {
        title,
        icon,
        fields = [],
        handles = {
            inputs: [],
            outputs: [],
        },
        footer,
        width = 260,
        className = "",
    } = config;

    return (
        <div
            className={`base-node ${selected ? "selected" : ""} ${className}`}
            style={{ width }}
        >
           
            <NodeHeader
                title={title}
                icon={icon}
            />
            <div className="node-body">
                <DynamicFields
                    nodeId={id}
                    fields={fields}
                    data={data}
                />
            </div>
            {footer && (
                <div className="node-footer">
                    {footer}
                </div>
            )}
            <NodeHandles
                nodeId={id}
                inputs={handles.inputs}
                outputs={handles.outputs}
            />
        </div>
    );
};

export default memo(BaseNode);