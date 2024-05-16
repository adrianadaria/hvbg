import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline text-green-200">Question number 1</h1>
      <ul>
        <li>
            Answer 1
        </li>
        <li>
            Answer 2
        </li>
        <li>
            Answer 3
        </li>
        <li>
            Answer 4
        </li>
      </ul>
    </div>
  );
}
