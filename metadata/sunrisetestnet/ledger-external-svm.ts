import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const sunriseTestExternalSvmMetadata: LedgerMetadata = {
	solanadevnet: {
		name: 'Solana Devnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
		rpc: ['https://api.testnet.solana.com'],
		assets: {
			sol: {
				// todo change to ibc denom
				tickerDisplay: 'SOL',
				tickerSystem: 'SOL',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
				exponents: 9
			}
		},
		addressType: AddressType.Svm
	}
};
