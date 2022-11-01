import { sourceData, SOURCE_DATA } from "../data/mockData";
import { PopularPairContainer } from "./PopularPairContainer";

export function Container({
  iconUrl,
  assetAlias,
  assetTitle,
  worth,
  difference,
  price,
  pairs,
}: sourceData) {
  const currencyFormatter = (
    currency: number,
    allowDecimal: boolean = true
  ): string => {
    const result = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(currency);
    return allowDecimal ? result : result.substring(0, result.length - 3);
  };

  return (
    <div className="container-wrapper mt-12">
      <div className="container w-[291px] h-[351px] bg-[url(assets/container_vector.svg)] flex flex-col items-center">
        <div className="circle w-[100px] h-[100px] rounded-[50%] -mt-12 bg-custom-blue-500 flex items-center justify-center">
          <img src={iconUrl} alt="icon" />
        </div>
        <div className="content flex flex-col items-center justify-center font-tomorrow text-custom-blue-500 gap-2 px-8 pt-8 w-full font-semibold">
          <p className="text-sm text-custom-blue-100">
            {assetTitle} ({assetAlias})
          </p>
          <div className="bg-custom-blue-900 flex justify-center w-full px-4 py-2 mt-2 rounded-[17px] border-t border-gray-700 relative">
            <p className="text-slate-50">{currencyFormatter(worth)}</p>
            <p
              className={`absolute right-3 top-3 text-[12px] ${
                difference < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {difference}%
            </p>
          </div>
          <p className="text-[12px]">Price</p>
          <div className="bg-custom-blue-900 flex justify-center w-full rounded-[17px] px-4 py-2 border-t border-gray-700 text-slate-50">
            <p>{currencyFormatter(price, false)}</p>
          </div>
          <p className="text-[12px]">TVL</p>
          <PopularPairContainer
            pairs={pairs.map((element) => SOURCE_DATA[element].iconUrl)}
          />
          <p className="-mt-2 text-[12px]">Popular pairs</p>
        </div>
      </div>
    </div>
  );
}
