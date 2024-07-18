import { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const metadataExternalSvm: LedgerMetadata = {
	solana: {
		name: 'Solana',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
		rpc: ['https://api.mainnet-beta.solana.com', 'https://rpc.ankr.com/solana'],
		assets: {
			sol: {
				tickerDisplay: 'SOL',
				tickerSystem: 'SOL',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
				exponents: 9
			},
			TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: {
				tickerDisplay: 'WIF',
				tickerSystem: 'WIF',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png',
				exponents: 6
			}
		},
		addressType: AddressType.Svm
	}
};
