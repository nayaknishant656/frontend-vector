import React, { memo } from "react";

const DynamicFields = ({
    nodeId,
    fields = [],
    data = {},
    onChange,
}) => {
    const handleChange = (name, value) => {
        if (onChange) {
            onChange(nodeId, name, value);
        }
    };

    return (
        <div className="dynamic-fields">
            {fields.map((field) => {
                const value = data[field.name] ?? field.defaultValue ?? "";

                switch (field.type) {
                    case "text":
                        return (
                            <div className="field" key={field.name}>
                                <label>{field.label}</label>

                                <input
                                    type="text"
                                    value={value}
                                    placeholder={field.placeholder}
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.value)
                                    }
                                />
                            </div>
                        );

                    case "textarea":
                        return (
                            <div className="field" key={field.name}>
                                <label>{field.label}</label>

                                <textarea
                                    rows={field.rows || 4}
                                    value={value}
                                    placeholder={field.placeholder}
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.value)
                                    }
                                />
                            </div>
                        );

                    case "number":
                        return (
                            <div className="field" key={field.name}>
                                <label>{field.label}</label>

                                <input
                                    type="number"
                                    value={value}
                                    placeholder={field.placeholder}
                                    onChange={(e) =>
                                        handleChange(field.name, Number(e.target.value))
                                    }
                                />
                            </div>
                        );

                    case "select":
                        return (
                            <div className="field" key={field.name}>
                                <label>{field.label}</label>

                                <select
                                    value={value}
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.value)
                                    }
                                >
                                    {field.options.map((option) => (
                                        <option
                                            key={option}
                                            value={option}
                                        >
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        );

                    case "checkbox":
                        return (
                            <div className="checkbox-field" key={field.name}>
                                <input
                                    type="checkbox"
                                    checked={Boolean(value)}
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.checked)
                                    }
                                />

                                <label>{field.label}</label>
                            </div>
                        );

                    default:
                        return (
                            <div
                                key={field.name}
                                style={{ color: "red" }}
                            >
                                Unsupported field type: {field.type}
                            </div>
                        );
                }
            })}
        </div>
    );
};

export default memo(DynamicFields);