import bitcoin from "./icons/bitcoin.png";
import solana from "./icons/solana.png";
import ethereum from "./icons/ethereum.png";
import binance from "./icons/binance.png";
import shibaInu from "./icons/shibaInu.png";

export interface mockdata {
  assetTitle: string;
  assetAlias: string;
  iconUrl: string;
  worth: number;
  difference: number;
  price: number;
  pairs: number[];
}

export const MOCKDATA: Array<mockdata> = [
  {
    assetTitle: "Bitcoin",
    assetAlias: "BTC",
    iconUrl: bitcoin,
    worth: 31812.8,
    difference: 10,
    price: 60000,
    pairs: [1, 2, 3],
  },
  {
    assetTitle: "Solana",
    assetAlias: "SOL",
    iconUrl: solana,
    worth: 32.83,
    difference: -12.32,
    price: 60000,
    pairs: [0, 2, 3],
  },
  {
    assetTitle: "Ethereum",
    assetAlias: "ETH",
    iconUrl: ethereum,
    worth: 1466.45,
    difference: -11.93,
    price: 60000,
    pairs: [1, 0, 3],
  },
  {
    assetTitle: "Binance USD",
    assetAlias: "BUSD",
    iconUrl: binance,
    worth: 1,
    difference: 0.26,
    price: 60000,
    pairs: [1, 2, 3],
  },
  {
    assetTitle: "Shiba Inu",
    assetAlias: "SHIB",
    iconUrl: shibaInu,
    worth: 0.01948,
    difference: -8.1,
    price: 60000,
    pairs: [1, 2, 3],
  },
];
