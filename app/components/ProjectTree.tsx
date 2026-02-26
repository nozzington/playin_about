export type TreeNode = {
  label: string;
  milestone?: boolean;
  children?: TreeNode[];
};

export function ProjectTree({ nodes }: { nodes: TreeNode[] }) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.label}>
          {node.milestone ? <strong>★ {node.label}</strong> : node.label}
          {node.children && node.children.length > 0 ? <ProjectTree nodes={node.children} /> : null}
        </li>
      ))}
    </ul>
  );
}
