import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';
import { ASSET_ID_NOBLE_USDC, ASSET_ID_ATOM, ASSET_ID_USDN, ASSET_ID_USDY, ASEET_ID_WBTC, ASSET_ID_WETH } from './asset';

export const sunriseExternalCosmosMetadata: LedgerMetadata = {
	cosmoshub: {
		name: 'Cosmos Hub',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		rpc: ['https://rpc.cosmos.nodestake.top'],
		assets: {
			[ASSET_ID_ATOM]: {
				tickerDisplay: 'ATOM',
				tickerSystem: 'ATOM',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6,
				base: "uatom",
				baseExponents: 6
			},
			[ASEET_ID_WBTC]: {
				tickerDisplay: 'WBTC',
				tickerSystem: 'WBTC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
				exponents: 8,
				base: "ibc/D742E8566B0B8CC8F569D950051C09CF57988A88F0E45574BFB3079D41DE6462",
				baseExponents: 8
			},
			[ASSET_ID_WETH]: {
				tickerDisplay: 'WETH',
				tickerSystem: 'ETH',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg',
				exponents: 18,
				base: "ibc/C0B53D3D23827AE38058BED0BDCD554229278AF530A8D265FCF6DFF7C4B2ADFF",
				baseExponents: 18
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'cosmos',
		chainId: 'cosmoshub-4',
		sunriseChannel: 'channel-1',
		cosmosChannel: 'channel-1421'
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
				exponents: 6,
				base: "uusdc",
				baseExponents: 6
			},
			[ASSET_ID_USDN]: {
				tickerDisplay: 'USDN',
				tickerSystem: 'USDN',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg',
				exponents: 6,
				base: "uusdn",
				baseExponents: 6
			},
			[ASSET_ID_USDY]: {
				tickerDisplay: 'USDY',
				tickerSystem: 'USDY',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
				exponents: 18,
				base: "ausdy",
				baseExponents: 18
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'noble',
		chainId: 'noble-1',
		sunriseChannel: 'channel-0',
		cosmosChannel: 'channel-168'
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
