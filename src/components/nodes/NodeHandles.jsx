// src/components/nodes/NodeHandles.jsx

import React, { memo } from "react";
import { Handle, Position, ReactFlowProvider } from "@xyflow/react";

const DEFAULT_INPUT_LEFT = -8;
const DEFAULT_OUTPUT_RIGHT = -8;

const NodeHandles = ({
    nodeId,
    handles = {
        target: [],
        source: []
    }
}) => {
    const elements = [];

    if (handles.target) {
        const targets = Array.isArray(handles.target)
            ? handles.target
            : [handles.target];

        targets.forEach((handle, index) => {
            const handleId = handle.id.replace(/{id}/g, nodeId);

            elements.push(
                <Handle
                    key={`target-${handleId}`}
                    id={handleId}
                    type="target"
                    position={Position.Left}
                    style={{
                        top: handle.style?.top || `${50 + index * 35}px`,
                        left: handle.style?.left || DEFAULT_INPUT_LEFT,
                        background: handle.color || "#3b82f6",
                        width: handle.style?.width || 12,
                        height: handle.style?.height || 12,
                        border: handle.style?.border || "2px solid white",
                        cursor: "crosshair",
                        ...handle.style // Allow overriding any styles
                    }}
                    isConnectable={handle.isConnectable ?? true}
                />
            );
        });
    }

    // -------- Process Source Handles (Right side - Outputs) --------
    if (handles.source) {
        const sources = Array.isArray(handles.source)
            ? handles.source
            : [handles.source];

        sources.forEach((handle, index) => {
            // Replace {id} placeholder with actual nodeId
            const handleId = handle.id.replace(/{id}/g, nodeId);

            elements.push(
                <Handle
                    key={`source-${handleId}`}
                    id={handleId}
                    type="source"
                    position={Position.Right}
                    style={{
                        top: handle.style?.top || `${50 + index * 35}px`,
                        right: handle.style?.right || DEFAULT_OUTPUT_RIGHT,
                        background: handle.color || "#10b981",
                        width: handle.style?.width || 12,
                        height: handle.style?.height || 12,
                        border: handle.style?.border || "2px solid white",
                        cursor: "crosshair",
                        ...handle.style // Allow overriding any styles
                    }}
                    isConnectable={handle.isConnectable ?? true}
                />
            );
        });
    }

    return <>{elements}</>;
};

// Wrap with ReactFlowProvider
const NodeHandlesWithProvider = (props) => {
    return (
        <ReactFlowProvider>
            <NodeHandles {...props} />
        </ReactFlowProvider>
    );
};

export default memo(NodeHandlesWithProvider);