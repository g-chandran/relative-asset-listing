import {
  AssetCompleteInfo,
  AssetPrimaryInfo,
  SOURCE_DATA,
} from "../data/mockData";
import { NewContainer } from "./NewContainer";

export function Assets({ assets }: { assets: Array<AssetPrimaryInfo> }) {
  const transformedData: Array<AssetCompleteInfo> = [];

  for (const asset of assets) {
    if (SOURCE_DATA[asset.slug] !== undefined) {
      transformedData.push({
        ...SOURCE_DATA[asset.slug],
        price: Number(asset.tvl),
        pairs: asset.pairedAssetSlugs,
        slug: asset.slug,
      });
    }
  }

  return (
    <div className="flex gap-16 flex-wrap justify-center mt-8">
      {transformedData.map((element) => (
        <NewContainer key={element.slug} {...element} />
      ))}
    </div>
  );
}
