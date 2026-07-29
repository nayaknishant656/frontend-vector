import React from "react";
import BaseNode from "./Basenode.jsx";
import NodeRegistry from "./NodeRegistry.jsx";

const NodeFactory = ({ id, data, selected, type }) => {
    const config = NodeRegistry[type];

    if (!config) {
        return (
            <div
                style={{
                    padding: 12,
                    border: "1px solid red",
                    borderRadius: 6,
                    background: "#fff5f5",
                }}
            >
                Unknown node type: <strong>{type}</strong>
            </div>
        );
    }

    return (
        <BaseNode
            id={id}
            data={data}
            selected={selected}
            config={config}
        />
    );
};

export default React.memo(NodeFactory);