// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

// Build Adjacency List
const buildGraph = (nodes, edges) => {
  const graph = {};

  // Initialize graph
  nodes.forEach((node) => {
    graph[node.id] = [];
  });

  // Add directed edges
  edges.forEach((edge) => {
    if (graph[edge.source]) {
      graph[edge.source].push(edge.target);
    }
  });

  return graph;
};

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  graph: {},
  nodeIDs: {},

  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };

    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }

    newIDs[type] += 1;

    set({
      nodeIDs: newIDs,
    });

    return `${type}-${newIDs[type]}`;
  },

  addNode: (node) => {
    const newNodes = [...get().nodes, node];

    const graph = buildGraph(newNodes, get().edges);

    set({
      nodes: newNodes,
      graph,
    });

    // console.log("========== NODE ADDED ==========");
    // console.log("Nodes:", newNodes);
    // console.log("Edges:", get().edges);
    // console.log("Graph:", graph);
  },

  onNodesChange: (changes) => {
    const newNodes = applyNodeChanges(changes, get().nodes);

    const graph = buildGraph(newNodes, get().edges);

    set({
      nodes: newNodes,
      graph,
    });

    // console.log("========== NODES UPDATED ==========");
    // console.log("Nodes:", newNodes);
    // console.log("Edges:", get().edges);
    // console.log("Graph:", graph);
  },

  onEdgesChange: (changes) => {
    const newEdges = applyEdgeChanges(changes, get().edges);

    const graph = buildGraph(get().nodes, newEdges);

    set({
      edges: newEdges,
      graph,
    });

    // console.log("========== EDGES UPDATED ==========");
    // console.log("Nodes:", get().nodes);
    // console.log("Edges:", newEdges);
    // console.log("Graph:", graph);
  },

  onConnect: (connection) => {
    const newEdges = addEdge(
      {
        ...connection,
        type: "smoothstep",
        animated: true,
        markerEnd: {
          type: MarkerType.Arrow,
          width: 20,
          height: 20,
        },
      },
      get().edges
    );

    const graph = buildGraph(get().nodes, newEdges);

    set({
      edges: newEdges,
      graph,
    });

    console.log("========== NEW CONNECTION ==========");
    console.log("Nodes:", get().nodes);
    console.log("Edges:", newEdges);
    console.log("Graph:", graph);
  },

  updateNodeField: (nodeId, fieldName, fieldValue) => {
    const updatedNodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        return {
          ...node,
          data: {
            ...node.data,
            [fieldName]: fieldValue,
          },
        };
      }
      return node;
    });

    const graph = buildGraph(updatedNodes, get().edges);

    set({
      nodes: updatedNodes,
      graph,
    });

    console.log("========== NODE UPDATED ==========");
    console.log("Nodes:", updatedNodes);
    console.log("Edges:", get().edges);
    console.log("Graph:", graph);
  },
}));