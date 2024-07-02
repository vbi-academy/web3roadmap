import ReactFlow, { Background } from "reactflow";

import "reactflow/dist/style.css";
import "./roadmapDrawer.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 500, y: 50 },
    data: { label: "Blockchain Basic", body: "hello world" },
  },
  {
    id: "2",
    position: { x: 500, y: 200 },
    data: { label: "Blockchain In-deep" },
  },
  {
    id: "3",
    position: { x: 500, y: 300 },
    data: { label: "Oracles" },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

const onNodeClick = (event: any, node: any) => console.log("click node", node);

export default function App() {
  return (
    <div style={{ width: "100%", height: "1000vh" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        draggable={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        onNodeClick={onNodeClick}
      ></ReactFlow>
    </div>
  );
}
