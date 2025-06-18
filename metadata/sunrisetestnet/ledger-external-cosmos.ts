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
	},
	neutrontestnet: {
		name: 'Neutron Testnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg',
		rpc: ['https://rpc-falcron.pion-1.ntrn.tech'],
		assets: {
			[ASSET_ID_PROVIDER_ATOM]: {
				tickerDisplay: 'ATOM',
				tickerSystem: 'ATOM',
				base: 'ibc/D1283F23CC25C39F16BCFB2DFFA9997AE7A101B92810D0F9F0AA092F6FE332D0',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'neutron',
		chainId: 'pion-1',
		srcChannel: 'channel-0',
		dstChannel: 'channel-0'
	}
};
