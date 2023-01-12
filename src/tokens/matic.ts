import { CHAIN_ID } from "../constants";

export default {
  name: "Matic",
  symbol: "MATIC",
  logoUrl: "https://storageapi.fleek.co/6e41a561-e275-4698-bc36-548d30a80e96-bucket/POLYGON.svg",
  priceSources: [{ source: "coingecko", apiId: "matic-network" }],
  purchaseLinks: {},
  addresses: {
    matic: "",
    [CHAIN_ID.POLYGON_MAINNET]: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    [CHAIN_ID.FANTOM_MAINNET]: "0x40df1ae6074c35047bff66675488aa2f9f6384f3",
  },
};
