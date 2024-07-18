import { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const sunriseExternalBitcoinMetadata: LedgerMetadata = {
	bitcoin: {
		name: 'Bitcoin',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
		rpc: [],
		assets: {
			btc: {
				tickerDisplay: 'BTC',
				tickerSystem: 'BTC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
				exponents: 8
			}
		},
		addressType: AddressType.Bitcoin
	}
};
