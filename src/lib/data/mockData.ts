import bitcoin from "./icons/bitcoin.png";
import solana from "./icons/solana.png";
import ethereum from "./icons/ethereum.png";
import binance from "./icons/binance.png";
import shibaInu from "./icons/shibaInu.png";

/**
 * Complete props a Asset Container would expect
 */
export interface AssetCompleteInfo {
  assetTitle: string;
  assetAlias: string;
  iconUrl: string;
  worth: number;
  difference: number;
  price: number;
  pairs: string[];
  slug?: string;
}

/**
 * Unit Schema that API Endpoint returns
 */
export interface AssetPrimaryInfo {
  slug: string;
  tvl: string;
  pairedAssetSlugs: string[];
}

/**
 * Map to lookup and transform the endpoint response
 */
export interface sourceData {
  [slug: string]: AssetCompleteInfo;
}

export const SOURCE_DATA: sourceData = {
  bitcoin: {
    assetTitle: "Bitcoin",
    assetAlias: "BTC",
    iconUrl: bitcoin,
    worth: 31812.8,
    difference: 10,
    price: 60000,
    pairs: [],
  },
  filecoin: {
    assetTitle: "Filecoin",
    assetAlias: "FCN",
    iconUrl: solana,
    worth: 32.83,
    difference: -12.32,
    price: 60000,
    pairs: [],
  },
  solana: {
    assetTitle: "Solana",
    assetAlias: "SLN",
    iconUrl: solana,
    worth: 32.83,
    difference: -12.32,
    price: 60000,
    pairs: [],
  },
  ethereum: {
    assetTitle: "Ethereum",
    assetAlias: "ETH",
    iconUrl: ethereum,
    worth: 1466.45,
    difference: -11.93,
    price: 60000,
    pairs: [],
  },
  aave: {
    assetTitle: "Aave",
    assetAlias: "AAVE",
    iconUrl: binance,
    worth: 1,
    difference: 0.26,
    price: 60000,
    pairs: [],
  },
  chainlink: {
    assetTitle: "Chain Link",
    assetAlias: "CLK",
    iconUrl: shibaInu,
    worth: 0.01948,
    difference: -8.1,
    price: 60000,
    pairs: [],
  },
  fantom: {
    assetTitle: "Fantom",
    assetAlias: "FTM",
    iconUrl: solana,
    worth: 0.01948,
    difference: -8.1,
    price: 60000,
    pairs: [],
  },
  arweave: {
    assetTitle: "Arweave",
    assetAlias: "ARW",
    iconUrl: bitcoin,
    worth: 0.01948,
    difference: -8.1,
    price: 60000,
    pairs: [],
  },
  uniswap: {
    assetTitle: "Uniswap",
    assetAlias: "USP",
    iconUrl: ethereum,
    worth: 0.01948,
    difference: -8.1,
    price: 60000,
    pairs: [],
  },
};
