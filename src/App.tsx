import { useMemo, useState } from "react";
import { Assets } from "./lib/components/Assets";
import activityIcon from "./lib/data/icons/activity.png";
import { AssetPrimaryInfo } from "./lib/data/mockData";

function App() {
  const ASSET_URL = "https://trending-assets-api.onrender.com/trendingAssets";
  const [assets, setAssets] = useState<Array<AssetPrimaryInfo>>([]);

  /* 
  Fetches AssetPrimaryInfo from the Endpoint
  */
  const fetchAssets = async () => {
    const data = await fetch(ASSET_URL);
    const assets = await data.json();
    setAssets(assets);
  };

  useMemo(() => {
    fetchAssets();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center mx-16 mt-40 mb-8">
      <div className="w-full flex gap-3 items-center">
        <img src={activityIcon} alt="activity" width="16px" height="16px" />
        <p className="font-tomorrow text-slate-100">Trending assets</p>
      </div>
      {assets.length ? (
        <Assets assets={assets} />
      ) : (
        <p className="text-gray-300">Loading...</p>
      )}
    </main>
  );
}

export default App;
