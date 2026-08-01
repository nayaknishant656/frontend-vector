import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useStore } from "./store"; // Adjust path as needed

export const SubmitButton = () => {
    const { nodes, edges, nodeIDs } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
        nodeIDs: state.nodeIDs,
    }));

    const [alert, setAlert] = useState(null);

    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(null);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    const handleSubmit = async () => {
        const payload = {
            nodes,
            edges,
            nodeIDs,
        };

        console.log("Sending Payload:", payload);

        try {
            const response = await fetch("http://localhost:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Failed to send data (Status: ${response.status})`);
            }

            const data = await response.json();
            console.log("Backend Response:", data);

            setAlert({
                severity: "success",
                title: "Success",
                message: `Pipeline parsed successfully! Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag ? "Yes" : "No"}`
            });
        } catch (error) {
            console.error("Error:", error);
            setAlert({
                severity: "error",
                title: "Error",
                message: error.message || "Failed to communicate with the server."
            });
        }
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0"
            }}
        >
            {alert && (
                <Stack
                    sx={{
                        position: "fixed",
                        top: 24,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 20000000,
                        width: "90%",
                        maxWidth: 600,
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                    }}
                    spacing={2}
                >
                    <Alert severity={alert.severity} onClose={() => setAlert(null)}>
                        <AlertTitle>{alert.title}</AlertTitle>
                        {alert.message}
                    </Alert>
                </Stack>
            )}
            <button
                type="button"
                onClick={handleSubmit}
                style={{
                    backgroundColor: "#1a73e8",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    padding: "10px 24px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.2s ease-in-out",
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#1557b0";
                    e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.15)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#1a73e8";
                    e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
                }}
            >
                Submit
            </button>
        </div>
    );
};