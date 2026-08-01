// // src/nodes/NodeRegistry.js


// import inputConfig from "./configs/input";
// import outputConfig from "./configs/output";
// import llmConfig from "./configs/llm";
// import textConfig from "./configs/text";


// import apiConfig from "./configs/api";
// import databaseConfig from "./configs/database";
// import emailConfig from "./configs/email";
// import delayConfig from "./configs/delay";
// import conditionConfig from "./configs/condition";



// const NodeRegistry = {
//     input: inputConfig,
//     output: outputConfig,
//     llm: llmConfig,
//     text: textConfig,

//     api: apiConfig,
//     database: databaseConfig,
//     email: emailConfig,
//     delay: delayConfig,
//     condition: conditionConfig,
// };

// export default NodeRegistry;



// src/nodes/NodeRegistry.js

// import inputConfig from "../../nodes/configs/input";
// import outputConfig from "../../nodes/configs/output";
// import llmConfig from "../../nodes/configs/llm";
// import textConfig from "../../nodes/configs/text";
// import databaseConfig from "../../nodes/configs/database";
// import emailConfig from "../../nodes/configs/email";
// import delayConfig from "../../nodes/configs/delay";
// import conditionConfig from "../../nodes/configs/condition";

// const NodeRegistry = {
//     input: inputConfig,
//     output: outputConfig,
//     llm: llmConfig,
//     text: textConfig,
//     // api: apiConfig,
//     database: databaseConfig,
//     email: emailConfig,
//     delay: delayConfig,
//     condition: conditionConfig,
// };

// export default NodeRegistry;

// src/nodes/NodeRegistry.js

import inputConfig from "../../nodes/configs/Api";
import outputConfig from "../../nodes/configs/Api";
import llmConfig from "../../nodes/configs/Api";
import textConfig from "../../nodes/configs/Api";
import databaseConfig from "../../nodes/configs/Api";
import emailConfig from "../../nodes/configs/Api";
import delayConfig from "../../nodes/configs/Api";
import conditionConfig from "../../nodes/configs/Api";

const NodeRegistry = {
    microsoft: {
        id: 'microsoft',
        type: 'microsoft',
        selected: false,
        title: 'Microsoft',
        nodeComponent: 'MicrosoftNode',
        description: 'Microsoft 365 / Graph API integration',
        defaultData: {
            operation: 'sendEmail',
            to: '',
            subject: '',
            body: '',
            label: 'Microsoft'
        },
        handles: {
            target: {
                position: 'Left',
                id: '{id}-input'
            },
            source: {
                position: 'Right',
                id: '{id}-output'
            }
        },
        fields: [
            {
                type: 'select',
                name: 'operation',
                label: 'Operation',
                defaultValue: 'sendEmail',
                options: [
                    'Send Email',
                    'Create Calendar Event',
                    'Get User Profile',
                    'List Emails',
                    'Create OneDrive File'
                ]
            },
            {
                type: 'text',
                name: 'to',
                label: 'To',
                defaultValue: '',
                placeholder: 'recipient@example.com'
            },
            {
                type: 'text',
                name: 'subject',
                label: 'Subject',
                defaultValue: '',
                placeholder: 'Enter subject'
            },
            {
                type: 'textarea',
                name: 'body',
                label: 'Body',
                defaultValue: '',
                rows: 5,
                placeholder: 'Enter message or use {{variables}}'
            }
        ]
    }, input: {
        id: 'input',
        type: 'input',
        selected: false,
        title: "Input",
        nodeComponent: 'InputNode',
        description: 'Input node for accepting user data',
        defaultData: {
            inputName: 'input_1',
            inputType: 'Text',
            label: 'Input'
        },
        handles: {
            source: {
                position: 'Right',
                id: '{id}-value'
            }
        },
        fields: [
            {
                type: "text",
                name: "inputName",
                label: "Name",
                defaultValue: "input_1",
                placeholder: "Enter input name"
            },
            {
                type: "select",
                name: "inputType",
                label: "Type",
                defaultValue: "Text",
                options: ["Text", "File"]
            }
        ]
    },
    input: {
        id: 'input',
        type: 'input',
        selected: false,
        title: "Input",
        nodeComponent: 'InputNode',
        description: 'Input node for accepting user data',
        defaultData: {
            inputName: 'input_1',
            inputType: 'Text',
            label: 'Input'
        },
        handles: {
            source: {
                position: 'Right',
                id: '{id}-value'
            }
        },
        fields: [
            {
                type: "text",
                name: "inputName",
                label: "Name",
                defaultValue: "input_1",
                placeholder: "Enter input name"
            },
            {
                type: "select",
                name: "inputType",
                label: "Type",
                defaultValue: "Text",
                options: ["Text", "File"]
            }
        ]
    },
    output: {
        id: 'outputT',
        type: 'outputT',
        selected: false,
        title: "OutputT",
        nodeComponent: 'OutputTNode',
        description: 'Output node for displaying results',
        defaultData: {
            outputName: 'outputT_1',
            label: 'Output'
        },
        handles: {
            target: {
                position: 'Left',
                id: '{id}-value'
            }
        },
        fields: [
            {
                type: "text",
                name: "outputName",
                label: "Output Name",
                defaultValue: "output_1",
                placeholder: "Enter output name"
            }
        ]
    },
    llm: {
        id: 'OutputLLM',
        type: 'OutputLLM',
        selected: false,
        title: "OutputLLM",
        nodeComponent: 'OutputLLMNode',
        description: 'LLM processing node',
        defaultData: {
            model: 'gpt-3.5-turbo',
            temperature: 0.7,
            maxTokens: 1000,
            systemPrompt: 'You are a helpful assistant.',
            label: 'LLM'
        },
        handles: {
            target: [
                {
                    position: 'Left',
                    id: '{id}-system',
                    style: { top: '33%' }
                },
                {
                    position: 'Left',
                    id: '{id}-prompt',
                    style: { top: '66%' }
                }
            ],
            source: {
                position: 'Right',
                id: '{id}-response'
            }
        },
        fields: [
            {
                type: "select",
                name: "model",
                label: "Model",
                defaultValue: "gpt-3.5-turbo",
                options: ["gpt-3.5-turbo", "gpt-4", "claude-3", "llama-2"]
            },
            {
                type: "range",
                name: "temperature",
                label: "Temperature",
                defaultValue: 0.7,
                min: 0,
                max: 2,
                step: 0.1
            },
            {
                type: "number",
                name: "maxTokens",
                label: "Max Tokens",
                defaultValue: 1000,
                min: 1,
                max: 4000
            },
            {
                type: "textarea",
                name: "systemPrompt",
                label: "System Prompt",
                defaultValue: "You are a helpful assistant.",
                rows: 3,
                placeholder: "Enter system prompt"
            }
        ]
    },
    text: {
        id: 'text',
        type: 'text',
        selected: false,
        title: "Text",
        nodeComponent: 'TextNode',
        description: 'Text processing node',
        defaultData: {
            text: '{{input}}',
            label: 'Text'
        },
        handles: {
            source: {
                position: 'Right',
                id: '{id}-output'
            }
        },
        fields: [
            {
                type: "textarea",
                name: "text",
                label: "Text",
                defaultValue: "{{input}}",
                rows: 3,
                placeholder: "Enter text with {{variables}}"
            }
        ]
    },
    api: {
        id: 'api',
        type: 'api',
        selected: false,
        title: "API",
        nodeComponent: 'APINode',
        description: 'API call node',
        defaultData: {
            url: 'https://api.example.com/endpoint',
            method: 'GET',
            headers: {},
            body: {},
            cache: true,
            timeout: 30000,
            label: 'API'
        },
        handles: {
            target: {
                position: 'Left',
                id: '{id}-input'
            },
            source: {
                position: 'Right',
                id: '{id}-response'
            }
        },
        fields: [
            {
                type: "select",
                name: "method",
                label: "Method",
                defaultValue: "GET",
                options: ["GET", "POST", "PUT", "DELETE", "PATCH"]
            },
            {
                type: "text",
                name: "url",
                label: "Endpoint",
                placeholder: "https://api.example.com/endpoint",
                defaultValue: "https://api.example.com/endpoint"
            },
            {
                type: "textarea",
                name: "body",
                label: "Request Body",
                rows: 5,
                placeholder: '{\n  "key": "value"\n}',
                defaultValue: "{}"
            },
            {
                type: "checkbox",
                name: "cache",
                label: "Enable Cache",
                defaultValue: true
            },
            {
                type: "number",
                name: "timeout",
                label: "Timeout (ms)",
                defaultValue: 30000,
                min: 1000,
                max: 120000
            },
            {
                type: "textarea",
                name: "headers",
                label: "Headers",
                rows: 3,
                placeholder: '{\n  "Authorization": "Bearer token"\n}',
                defaultValue: "{}"
            }
        ]
    },
    database: {
        id: 'database',
        type: 'database',
        selected: false,
        title: "Database",
        nodeComponent: 'DatabaseNode',
        description: 'Database query node',
        defaultData: {
            connection: 'default',
            query: 'SELECT * FROM users',
            params: {},
            useTransaction: false,
            label: 'Database'
        },
        handles: {
            target: {
                position: 'Left',
                id: '{id}-input'
            },
            source: {
                position: 'Right',
                id: '{id}-result'
            }
        },
        fields: [
            {
                type: "select",
                name: "connection",
                label: "Connection",
                defaultValue: "default",
                options: ["default", "production", "staging", "development"]
            },
            {
                type: "textarea",
                name: "query",
                label: "Query",
                defaultValue: "SELECT * FROM users",
                rows: 4,
                placeholder: "Enter SQL query"
            },
            {
                type: "checkbox",
                name: "useTransaction",
                label: "Use Transaction",
                defaultValue: false
            },
            {
                type: "textarea",
                name: "params",
                label: "Query Parameters",
                rows: 3,
                placeholder: '{\n  "id": 1\n}',
                defaultValue: "{}"
            }
        ]
    },
    email: {
        id: 'email',
        type: 'email',
        selected: false,
        title: "Gmail",
        nodeComponent: 'Emailnode',
        description: 'Email sending node',
        defaultData: {
            to: '',
            subject: '',
            body: '',
            cc: '',
            bcc: '',
            attachments: [],
            isHtml: false,
            priority: 'normal',
            label: 'Gmail'
        },
        handles: {
            target: {
                position: 'Left',
                id: '{id}-input'
            },
            source: {
                position: 'Right',
                id: '{id}-output'
            }
        },
        fields: [
            {
                type: "text",
                name: "to",
                label: "To",
                placeholder: "recipient@example.com",
                defaultValue: ""
            },
            {
                type: "text",
                name: "subject",
                label: "Subject",
                placeholder: "Email subject",
                defaultValue: ""
            },
            {
                type: "textarea",
                name: "body",
                label: "Body",
                rows: 5,
                placeholder: "Email body content",
                defaultValue: ""
            },
            {
                type: "text",
                name: "cc",
                label: "CC",
                placeholder: "cc@example.com",
                defaultValue: ""
            },
            {
                type: "text",
                name: "bcc",
                label: "BCC",
                placeholder: "bcc@example.com",
                defaultValue: ""
            },
            {
                type: "checkbox",
                name: "isHtml",
                label: "Send as HTML",
                defaultValue: false
            },
            {
                type: "select",
                name: "priority",
                label: "Priority",
                defaultValue: "normal",
                options: ["low", "normal", "high"]
            },
            {
                type: "textarea",
                name: "attachments",
                label: "Attachments",
                rows: 2,
                placeholder: '["file1.pdf", "file2.jpg"]',
                defaultValue: "[]"
            }
        ]
    },
    delay: {
        id: 'delay',
        type: 'delay',
        selected: false,
        title: "Delay",
        nodeComponent: 'DelayNode',
        description: 'Delay execution node',
        defaultData: {
            duration: 1000,
            unit: 'milliseconds',
            dynamicDelay: false,
            label: 'Delay'
        },
        handles: {
            target: {
                position: 'Left',
                id: '{id}-input'
            },
            source: {
                position: 'Right',
                id: '{id}-output'
            }
        },
        fields: [
            {
                type: "number",
                name: "duration",
                label: "Duration",
                defaultValue: 1000,
                min: 0,
                placeholder: "Enter duration"
            },
            {
                type: "select",
                name: "unit",
                label: "Unit",
                defaultValue: "milliseconds",
                options: ["milliseconds", "seconds", "minutes", "hours"]
            },
            {
                type: "checkbox",
                name: "dynamicDelay",
                label: "Dynamic Delay (from input)",
                defaultValue: false
            }
        ]
    },
    condition: {
        id: 'condition',
        type: 'condition',
        selected: false,
        title: "Condition",
        nodeComponent: 'ConditionNode',
        description: 'Conditional branching node',
        defaultData: {
            condition: '{{value}} > 10',
            trueLabel: 'True',
            falseLabel: 'False',
            caseSensitive: false,
            label: 'Condition'
        },
        handles: {
            target: {
                position: 'Left',
                id: '{id}-input'
            },
            source: [
                {
                    position: 'Right',
                    id: '{id}-true',
                    label: 'True'
                },
                {
                    position: 'Right',
                    id: '{id}-false',
                    label: 'False'
                }
            ]
        },
        fields: [
            {
                type: "textarea",
                name: "condition",
                label: "Condition",
                defaultValue: "{{value}} > 10",
                rows: 2,
                placeholder: "{{value}} > 10"
            },
            {
                type: "text",
                name: "trueLabel",
                label: "True Path Label",
                defaultValue: "True",
                placeholder: "Label for true branch"
            },
            {
                type: "text",
                name: "falseLabel",
                label: "False Path Label",
                defaultValue: "False",
                placeholder: "Label for false branch"
            },
            {
                type: "checkbox",
                name: "caseSensitive",
                label: "Case Sensitive",
                defaultValue: false
            }
        ]
    }
};

export default NodeRegistry;