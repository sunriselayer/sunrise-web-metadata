import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';
import { ASSET_ID_PROVIDER_ATOM, ASSET_ID_RISE } from './asset';

export const sunriseTestExternalCosmosMetadata: LedgerMetadata = {
	cosmosicsprovidertestnet: {
		name: 'Cosmos ICS Provider Testnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		rpc: ['https://rpc.provider-sentry-01.ics-testnet.polypore.xyz'],
		assets: {
			[ASSET_ID_PROVIDER_ATOM]: {
				tickerDisplay: 'ATOM',
				tickerSystem: 'ATOM',
				base: 'uatom',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6
			},
			[ASSET_ID_RISE]: {
				tickerDisplay: 'RISE',
				tickerSystem: 'RISE',
				base: 'ibc/7C93F76A3800F40EB344E4B7130FEF99D51C5C0489C393112206A8065D5CFCBC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'cosmos',
		chainId: 'provider',
		srcChannel: 'channel-476',
		dstChannel: 'channel-0'
	}
};
