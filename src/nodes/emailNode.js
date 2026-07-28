// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const Emailnode = ({ id, data }) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');

    const handleNameChange = (e) => {
        setCurrText(e.target.value);
    };

    return (
        <div style={{ width: 200, height: 80, border: '1px solid black' }}>
            <div>
                <span>Gmail</span>
            </div>
            <div>
                <label>
                    Gmail
                    <input
                        type="text"
                        value={currText}
                        onChange={handleNameChange}
                    />
                </label>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id={`${id}-output`}
            />
        </div>
    );
}
