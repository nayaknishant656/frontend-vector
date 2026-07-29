import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const DEFAULT_INPUT_LEFT = -8;
const DEFAULT_OUTPUT_RIGHT = -8;

const NodeHandles = ({
    inputs = [],
    outputs = [],
}) => {
    return (
        <>
            {/* -------- Input Handles -------- */}
            {inputs.map((handle, index) => (
                <Handle
                    key={`input-${handle.id}`}
                    id={handle.id}
                    type="target"
                    position={Position.Left}
                    style={{
                        top: handle.top ?? 50 + index * 35,
                        left: handle.left ?? DEFAULT_INPUT_LEFT,
                        background: handle.color ?? "#3b82f6",
                        width: handle.size ?? 12,
                        height: handle.size ?? 12,
                        border: "2px solid white",
                        cursor: "crosshair",
                    }}
                    isConnectable={handle.isConnectable ?? true}
                />
            ))}

            {/* -------- Output Handles -------- */}
            {outputs.map((handle, index) => (
                <Handle
                    key={`output-${handle.id}`}
                    id={handle.id}
                    type="source"
                    position={Position.Right}
                    style={{
                        top: handle.top ?? 50 + index * 35,
                        right: handle.right ?? DEFAULT_OUTPUT_RIGHT,
                        background: handle.color ?? "#22c55e",
                        width: handle.size ?? 12,
                        height: handle.size ?? 12,
                        border: "2px solid white",
                        cursor: "crosshair",
                    }}
                    isConnectable={handle.isConnectable ?? true}
                />
            ))}
        </>
    );
};

export default memo(NodeHandles);