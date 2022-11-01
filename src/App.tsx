import { useMemo, useState } from "react";
import { Assets } from "./lib/components/Assets";
import activityIcon from "./lib/data/icons/activity.png";
import { AssetPrimaryInfo } from "./lib/data/mockData";

function App() {
  const ASSET_URL = "https://trending-assets-api.onrender.com/trendingAssets";
  const [assets, setAssets] = useState<Array<AssetPrimaryInfo>>([]);
  const [loadStatus, setLoadStatus] = useState<"idle" | "loading">("idle");
  const [error, setError] = useState<string>("");

  /* 
  Fetches AssetPrimaryInfo from the Endpoint
  */
  const fetchAssets = async () => {
    try {
      setLoadStatus("loading");
      const response = await fetch(ASSET_URL);
      if (!response.ok) {
        throw Error();
      }
      const assets = await response.json();
      setAssets(assets);
      setError("");
    } catch (error) {
      setError("Unable to fetch Assets. Try again later");
    } finally {
      setLoadStatus("idle");
    }
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
      {error ? (
        <p className="text-red-400 text-sm">{error}</p>
      ) : loadStatus === "loading" ? (
        <p className="text-gray-300 text-sm">Loading...</p>
      ) : (
        <Assets assets={assets} />
      )}
    </main>
  );
}

export default App;
