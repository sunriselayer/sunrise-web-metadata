import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';
import { ASSET_ID_NOBLE_USDC, ASSET_ID_PROVIDER_ATOM, ASSET_ID_USDN } from './asset';

export const sunriseExternalCosmosMetadata: LedgerMetadata = {
	cosmoshub: {
		name: 'Cosmos Hub',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		rpc: ['https://rpc.cosmos.nodestake.top'],
		assets: {
			[ASSET_ID_PROVIDER_ATOM]: {
				tickerDisplay: 'ATOM',
				tickerSystem: 'ATOM',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'cosmos',
		chainId: 'cosmoshub-4',
		srcChannel: 'channel-1',
		dstChannel: 'channel-1421'
	},
	// celestia: {
	// 	name: 'Celestia',
	// 	image:
	// 		'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
	// 	rpc: ['https://public-celestia-rpc.numia.xyz'],
	// 	assets: {
	// 		utia: {
	// 			tickerDisplay: 'TIA',
	// 			tickerSystem: 'TIA',
	// 			image:
	// 				'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
	// 			exponents: 6
	// 		}
	// 	},
	// 	addressType: AddressType.Cosmos,
	// 	prefix: 'celestia'
	// },
	noble: {
		name: 'Noble',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
		rpc: ['https://noble-rpc.polkachu.com'],
		assets: {
			[ASSET_ID_NOBLE_USDC]: {
				tickerDisplay: 'USDC',
				tickerSystem: 'USDC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
				exponents: 6
			},
			[ASSET_ID_USDN]: {
				tickerDisplay: 'USDN',
				tickerSystem: 'USDN',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'noble',
		chainId: 'noble-1',
		srcChannel: 'channel-0',
		dstChannel: 'channel-168'
	},
	// osmosis: {
	// 	name: 'Osmosis',
	// 	image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
	// 	rpc: ['https://rpc.osmosis.zone/'],
	// 	assets: {},
	// 	addressType: AddressType.Cosmos,
	// 	prefix: 'osmo'
	// },
	// kava: {
	// 	name: 'Kava',
	// 	image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
	// 	rpc: ['https://rpc.data.kava.io'],
	// 	assets: {
	// 		'erc20/tether/usdt': {
	// 			tickerDisplay: 'USDT',
	// 			tickerSystem: 'USDT',
	// 			image:
	// 				'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
	// 			exponents: 6
	// 		}
	// 	},
	// 	addressType: AddressType.Cosmos,
	// 	prefix: 'kava'
	// }
};
