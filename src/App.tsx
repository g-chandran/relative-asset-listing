import { Assets } from "./lib/components/Assets";

function App() {
  return (
    <main className="flex flex-col justify-center items-center h-screen mx-16">
      <p className="font-tomorrow text-slate-100 w-full">Trending assets</p>
      <Assets />
    </main>
  );
}

export default App;
