import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

dotenvConfig({ path: resolve(__dirname, "../.env") });

export const chainIds = {
  ganache: 1337,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  ropsten: 3,
  privateChain: 1518488996,
};

if (!process.env.MNEMONIC) {
  throw new Error("Please set your MNEMONIC in a .env file");
}
export const mnemonic = process.env.MNEMONIC;

if (!process.env.INFURA_API_KEY) {
  throw new Error("Please set your INFURA_API_KEY in a .env file");
}
export const infuraApiKey = process.env.INFURA_API_KEY;

export function createTestnetConfig(network: keyof typeof chainIds) {
  const url: string = "https://" + network + ".infura.io/v3/" + infuraApiKey;
  return {
    accounts: {
      count: 10,
      initialIndex: 0,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds[network],
    saveDeployments: true,
    url,
  };
}

export function createPrivateChainConfig() {
  if (!process.env.KALEIDO_URL) {
    throw new Error("Please set your KALEIDO_URL in the .env file");
  }

  const url: string = process.env.KALEIDO_URL;
  return {
    accounts: {
      count: 10,
      initialIndex: 0,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds.privateChain,
    saveDeployments: true,
    url,
  };
}
