export default {
    title: "API",

    fields: [
        {
            type: "select",
            name: "method",
            label: "Method",
            defaultValue: "GET",
            options: ["GET", "POST", "PUT", "DELETE"],
        },

        {
            type: "text",
            name: "url",
            label: "Endpoint",
            placeholder: "https://api.example.com",
        },

        {
            type: "textarea",
            name: "body",
            label: "Request Body",
            rows: 5,
        },

        {
            type: "checkbox",
            name: "cache",
            label: "Enable Cache",
            defaultValue: true,
        },
    ],
};