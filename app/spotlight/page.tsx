import { ProjectTree, TreeNode } from "@/app/components/ProjectTree";

const spotlightTree: TreeNode[] = [
  {
    label: "Problem / Question (thesis framing)",
    milestone: true,
    children: [
      {
        label: "Research notes + references",
        children: [{ label: "Early hypotheses" }, { label: "Counter-arguments" }]
      },
      {
        label: "Experiment rounds",
        children: [
          { label: "Prototype A - draft" },
          { label: "Prototype B - alternate direction" },
          { label: "Failed branch: discarded method" }
        ]
      }
    ]
  },
  {
    label: "Milestone review and insight synthesis",
    milestone: true,
    children: [{ label: "Updated thesis stance" }, { label: "Next production sprint" }]
  },
  {
    label: "Current status",
    children: [{ label: "In progress (placeholder)" }]
  }
];

export default function SpotlightPage() {
  return (
    <section>
      <p className="kicker">Spotlight Project</p>
      <h1>Master&apos;s Thesis (Current)</h1>
      <p className="small">
        Hero interaction: deep branching tree with clear milestone signifiers. Replace these placeholders with real updates.
      </p>
      <article className="card tree">
        <ProjectTree nodes={spotlightTree} />
      </article>
    </section>
  );
}
