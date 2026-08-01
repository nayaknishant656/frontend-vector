// toolbar.js
// src/components/PipelineToolbar.jsx
import React from 'react';
import { DraggableNode } from './draggableNode';
import NodeRegistry from '../src/components/nodes/NodeRegistry';
import '../src/css/toolbutton.css'
export const PipelineToolbar = () => {

    // Get all node types from NodeRegistry
    const getNodeTypes = () => {
        return Object.keys(NodeRegistry).map(key => ({
            type: key,
            config: NodeRegistry[key]
        }));
    };

    const nodeTypes = getNodeTypes();

    return (

        <>
            <div className='sidebar_grandparent'>
                <div className='sidebar-parent'>
                    <div className='tool-button-parent'>
                        <div className='tool-button-child'>
                            {nodeTypes.map(({ type, config }) => (
                                <DraggableNode
                                    key={type}
                                    type={type}
                                    label={config.title || type}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </>
        // <div style={{ padding: '10px' }}>
        //     <div style={{
        //         marginTop: '20px',
        //         display: 'flex',
        //         flexWrap: 'wrap',
        //         gap: '10px',
        //         border: 'solid red 1px'

        //     }}>
        //         {nodeTypes.map(({ type, config }) => (
        //             <DraggableNode
        //                 key={type}
        //                 type={type}
        //                 label={config.title || type}
        //             />
        // //         ))}
        //     </div>
        // </div>
    );
};