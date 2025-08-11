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
		sunriseChannel?: string;
		cosmosChannel?: string;
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
			config: IBCEurekaConfig;
		};
	};
};

export interface IBCEurekaConfig {
	ibcChain: string;
	relayFeeRecipientAddress: Hex;
	ibcRelayAddress: string;
	ibcTransferContractAddress: string;
	sourceClient: string;
	destPort: string;
	counterpartyClientId: string;
}
