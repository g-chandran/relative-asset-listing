import { Assets } from "./lib/components/Assets";
import activityIcon from "./lib/data/icons/activity.png";

function App() {
  return (
    <main className="flex flex-col justify-center items-center mx-16 mt-40 mb-8">
      <div className="w-full flex gap-3 items-center">
        <img src={activityIcon} alt="activity" width="16px" height="16px" />
        <p className="font-tomorrow text-slate-100">Trending assets</p>
      </div>
      <Assets />
    </main>
  );
}

export default App;
