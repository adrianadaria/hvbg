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
      <div className="border px-4 py-5 mb-3 border-grey bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue to-navy rounded-full text-center"><p className="text-2xl font-bold text-white">W pilce noznej strzal w okienko to strzal:</p></div>
      <div className="flex flex-wrap">
          <div className="font-bold border border-grey px-4 py-5 bg-blue mb-3 rounded-full w-2/4 bg-gradient-to-r from-navy via-blue to-navy">
              <span className="font-bold text-yellow mr-2">A:</span>Answer 1
          </div>
          <div className="font-bold border border-grey px-4 py-5 bg-blue mb-3 rounded-full w-2/4 bg-gradient-to-r from-navy via-blue to-navy">
          <span className="font-bold text-yellow mr-2">B:</span>Answer 2
          </div>
          <div className="font-bold border border-grey px-4 py-5 bg-blue mb-3 rounded-full w-2/4 bg-gradient-to-r from-navy via-blue to-navy">
          <span className="font-bold text-yellow mr-2">C:</span>Answer 3
          </div>
          <div className="font-bold border border-grey px-4 py-5 bg-blue mb-3 rounded-full w-2/4 bg-gradient-to-r from-navy via-blue to-navy">
          <span className="font-bold text-yellow mr-2">D:</span>Answer 4
        </div>
      </div>
    </div>
  );
}
