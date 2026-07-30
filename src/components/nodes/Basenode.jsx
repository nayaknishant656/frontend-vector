// src/components/nodes/BaseNode.jsx

import React, { memo } from "react";
import "./basenode.css";
import { Handle, Position } from 'reactflow';
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
            target: [],
            source: [],
        },
        footer,
        width = '100%',
        className = "react-flow__node-group",
    } = config;

    // Helper function to render handles from configuration
    const renderHandles = () => {
        const elements = [];
        const nodeId = id;

        // Process target handles (left side - inputs)
        if (handles.target) {
            const targets = Array.isArray(handles.target)
                ? handles.target
                : [handles.target];

            targets.forEach((handle, index) => {
                const handleId = handle.id.replace(/{id}/g, nodeId);
                elements.push(
                    <Handle
                        key={`target-${index}`}
                        type="target"
                        position={Position[handle.position]}
                        id={handleId}
                        style={handle.style || {}}
                    />
                );
            });
        }

        // Process source handles (right side - outputs)
        if (handles.source) {
            const sources = Array.isArray(handles.source)
                ? handles.source
                : [handles.source];

            sources.forEach((handle, index) => {
                const handleId = handle.id.replace(/{id}/g, nodeId);
                elements.push(
                    <Handle
                        key={`source-${index}`}
                        type="source"
                        position={Position[handle.position]}
                        id={handleId}
                        style={handle.style || {}}
                    />
                );
            });
        }

        return elements;
    };

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
            {/* 
            {footer && (
                <div className="node-footer">
                    {footer}
                </div>
            )} */}


            {/* Render all handles from configuration */}
            {renderHandles()}
        </div>
    );
};

export default memo(BaseNode);