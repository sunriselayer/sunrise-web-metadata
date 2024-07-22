import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';
import { ASSET_ID_RISE } from './asset';

export const sunriseTestExternalCosmosMetadata: LedgerMetadata = {
	cosmoshubtestnet: {
		name: 'Cosmos Hub Public Testnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		rpc: ['https://rpc-theta.osmotest5.osmosis.zone/'],
		assets: {
			uatom: {
				// todo change to ibc denom
				tickerDisplay: 'ATOM',
				tickerSystem: 'ATOM',
				baseDenom: 'uatom',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'cosmos',
		chainId: 'theta-testnet-001'
	},
	celestiatestnet2: {
		name: 'Celestia Arabica Testnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
		rpc: ['https://api.celestia-arabica-11.com'],
		assets: {
			utia: {
				// todo change to ibc denom
				tickerDisplay: 'TIA',
				tickerSystem: 'TIA',
				baseDenom: 'utia',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'celestia',
		chainId: 'arabica-11'
	},
	celestiatestnet3: {
		name: 'Celestia Mocha Testnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
		rpc: ['https://rpc-mocha.pops.one/'],
		assets: {
			utia: {
				// todo change to ibc denom
				tickerDisplay: 'TIA',
				tickerSystem: 'TIA',
				baseDenom: 'utia',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'celestia',
		chainId: 'mocha-4'
	},
	osmosistestnet: {
		name: 'Osmosis Testnet',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
		rpc: ['https://rpc.testnet.osmosis.zone/'],
		assets: {
			'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518': {
				tickerDisplay: 'OSMO',
				tickerSystem: 'OSMO',
				baseDenom: 'uosmo',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
				exponents: 6
			},
			[ASSET_ID_RISE]: {
				tickerDisplay: 'RISE',
				tickerSystem: 'RISE',
				baseDenom: 'ibc/447BA50F36A959C65D475737B219095045AEFD50DF250DBCBCD659EAC15C904D',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'osmo',
		chainId: 'osmo-test-5',
		srcChannel: 'channel-8616',
		dstChannel: 'channel-0'
	}
};
