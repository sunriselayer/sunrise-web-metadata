import type { AssetMetadata } from './asset';
import { AddressType } from './wallet';

export type LedgerMetadata = {
	[ledgerId: string]: {
		name: string;
		image: string;
		assets: AssetMetadata;
		rpc: string[];
		addressType: AddressType;
		prefix?: string;
		chainId?: string;
		srcChannel?: string;
		dstChannel?: string;
		axelarGmp?: {
			evmContractAddress: string;
			evmFunctionName: string;
			ibcChainName: string;
			ibcSrcChannelId: string;
			ibcDstChannelId: string;
			ibcContractAddress: string;
		};
		explorer?: {
			txPage: string; // ${txHash}
		};
	};
};
