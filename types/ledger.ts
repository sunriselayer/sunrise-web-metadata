import type { Hex } from 'viem';
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
		nativeCurrency?: {
			name: string;
			symbol: string;
			decimals: number;
		};
		explorer?: {
			url: string;
			txPage: string; // ${txHash}
		};
		ibcEureka?: {
			ibcChain: string;
			config: IBCEurekaConfig;
		};
	};
};

export interface IBCEurekaConfig {
	ics20TransferAddress: Hex;
	ics26RouterAddress: Hex;
	clientId: string;
	counterpartyClientId: string;
}
