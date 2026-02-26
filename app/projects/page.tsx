import { ProjectTree, TreeNode } from "@/app/components/ProjectTree";

const projectSnapshots: { title: string; tree: TreeNode[] }[] = [
  {
    title: "Project Alpha",
    tree: [
      { label: "Idea" },
      { label: "Draft", children: [{ label: "Iteration 1" }, { label: "Iteration 2" }] },
      { label: "Milestone", milestone: true }
    ]
  },
  {
    title: "Project Beta",
    tree: [
      { label: "Research" },
      { label: "Experiment" },
      { label: "Public update", milestone: true }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <section>
      <p className="kicker">Projects</p>
      <h1>Project Progression</h1>
      <p className="small">Simple, lightweight trees for speed and mobile readability.</p>
      <div className="grid">
        {projectSnapshots.map((project) => (
          <article key={project.title} className="card tree">
            <h3>{project.title}</h3>
            <ProjectTree nodes={project.tree} />
          </article>
        ))}
      </div>
    </section>
  );
}
