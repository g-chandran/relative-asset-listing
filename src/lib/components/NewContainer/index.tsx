import { AssetCompleteInfo, SOURCE_DATA } from "../../data/mockData";
import { PopularPairContainer } from "../PopularPairContainer";
import styles from "./NewContainer.module.css";

export function NewContainer({
  iconUrl,
  assetAlias,
  assetTitle,
  worth,
  difference,
  price,
  pairs,
}: AssetCompleteInfo) {
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
    <div className="flex flex-col items-center w-fit pt-[50px]">
      <div className="w-[120px] h-[60px] bg-custom-blue-900 rounded-b-full -mb-[60px] before:content-[''] before:w-[25px] before:h-[20px] relative before:-left-[22px] before:absolute before:bg-transparent before:shadow-[4px_-4px_0_4px_#14172B] before:rounded-tr-full before:border-t before:border-r border border-t-0 border-gray-700 after:content-[''] after:w-[25px] after:h-[20px] after:bg-transparent after:absolute after:-right-[22px] after:top-0 after:rounded-tl-full after:border-l after:border-gray-700 before:border-gray-700 after:border-t after:shadow-[-4px_-4px_0_4px_#14172B]">
        <div className="w-[100px] ml-2 bg-custom-blue-900 h-[20px]"></div>
      </div>
      <div
        className={`w-[291px] h-[351px] rounded-2xl ${styles.container} flex flex-col items-center`}
      >
        <div className="circle w-[100px] h-[100px] rounded-full -mt-[50px] bg-custom-blue-500 flex items-center justify-center z-10">
          <img src={iconUrl} alt="icon" />
        </div>
        <div className="content flex flex-col items-center justify-center font-tomorrow text-custom-blue-500 gap-2 px-8 pt-7 w-full font-semibold">
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
