import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const sunriseTestExternalBitcoinMetadata: LedgerMetadata = {
	bitcoin: {
		name: 'Bitcoin',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
		rpc: [],
		assets: {
			btc: {
				tickerDisplay: 'BTC',
				tickerSystem: 'BTC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
				exponents: 8
			}
		},
		addressType: AddressType.Bitcoin
	}
};
