import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';
import {
	ASSET_ID_NOBLE_USDC,
	ASSET_ID_ATOM,
	ASSET_ID_USDN,
	ASSET_ID_USDY,
	ASEET_ID_WBTC,
	ASSET_ID_WETH,
	ASSET_ID_USDT,
	ASSET_ID_OSMO,
	ASSET_ID_RISE,
	ASSET_ID_USDRISE,
} from './asset';

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
			},
			[ASSET_ID_USDT]: {
				tickerDisplay: 'USDT',
				tickerSystem: 'USDT',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
				exponents: 6,
				base: "ibc/E7E51FFF94A8B55BE84CEB0345E5CAF0A5DAEB374C6806CE908098B8996C7782",
				baseExponents: 6
			},
			[ASSET_ID_NOBLE_USDC]: {
				tickerDisplay: 'USDC',
				tickerSystem: 'USDC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
				exponents: 6,
				base: 'ibc/F663521BF1836B00F5F177680F74BFB9A8B5654A694D0D2BC249E03CF2509013',
				baseExponents: 6,
				forwarding: {
					sunrise: {
						intermediateLedgerId: 'noble',
						channel: 'channel-536',
						port: 'transfer'
					},
					osmosis: {
						intermediateLedgerId: 'noble',
						channel: 'channel-1',
						port: 'transfer'
					}
				}
			},
			[ASSET_ID_RISE]: {
				tickerDisplay: 'RISE',
				tickerSystem: 'RISE',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
				exponents: 6,
				base: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
				baseExponents: 6
			},
			[ASSET_ID_USDRISE]: {
				tickerDisplay: 'USDrise',
				tickerSystem: 'USDrise',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
				exponents: 6,
				base: 'ibc/551CA67335E14C0F0D8B2AA24DF575F0E02836540330B20778C826F48ED8DE80',
				baseExponents: 6
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
				base: 'uusdc',
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
			},
			[ASSET_ID_RISE]: {
				tickerDisplay: 'RISE',
				tickerSystem: 'RISE',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
				exponents: 6,
				base: 'ibc/3895588D9C6B47E5B838E5ED3A64F7F728A1C41F0D97EE9E2F4817E46B445B38',
				baseExponents: 6
			},
			[ASSET_ID_USDRISE]: {
				tickerDisplay: 'USDrise',
				tickerSystem: 'USDrise',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
				exponents: 6,
				base: 'ibc/66382B8DABAC0CBDC669E8D3551F26D123BB28CE0C73D3705A571F58E23DCE81',
				baseExponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'noble',
		chainId: 'noble-1',
		sunriseChannel: 'channel-0',
		cosmosChannel: 'channel-168'
	},
	osmosis: {
		name: 'Osmosis',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
		rpc: ['https://rpc.osmosis.zone/'],
		assets: {
			[ASSET_ID_OSMO]: {
				tickerDisplay: 'OSMO',
				tickerSystem: 'OSMO',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
				exponents: 6,
				base: 'uosmo',
				baseExponents: 6
			},
			[ASSET_ID_NOBLE_USDC]: {
				tickerDisplay: 'USDC',
				tickerSystem: 'USDC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
				exponents: 6,
				base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
				baseExponents: 6,
				forwarding: {
					sunrise: {
						intermediateLedgerId: 'noble',
						channel: 'channel-750',
						port: 'transfer'
					},
					cosmoshub: {
						intermediateLedgerId: 'noble',
						channel: 'channel-4',
						port: 'transfer'
					}
				}
			},
			[ASSET_ID_RISE]: {
				tickerDisplay: 'RISE',
				tickerSystem: 'RISE',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
				exponents: 6,
				base: 'ibc/5DD535CC5244A556F78ACAFD1067D93C0FB335E69600343840D66E76CE46B30B',
				baseExponents: 6
			},
			[ASSET_ID_USDRISE]: {
				tickerDisplay: 'USDrise',
				tickerSystem: 'USDrise',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
				exponents: 6,
				base: 'ibc/2B46DD47EBAA57FB76436A1E5758BDE6356A8CE04D9FE879F95F838FAAD231B6',
				baseExponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'osmo',
		chainId: 'osmosis-1',
		sunriseChannel: 'channel-3',
		cosmosChannel: 'channel-106275'
	},
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
