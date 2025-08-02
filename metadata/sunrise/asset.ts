import { RoutePoolSchema } from '@sunriselayer/client/types/swap';
import type { AssetMetadata } from '../../types/asset';
import { create } from '@bufbuild/protobuf';

export const ASSET_ID_RISE = 'urise';
export const ASSET_ID_VRISE = 'uvrise';
export const ASSET_ID_USDRISE = 'uusdrise';
export const ASSET_ID_USDN = 'uusdn'; // TODO: change to ibc/xxxxxxxxx;
export const ASSET_ID_NOBLE_USDC = "uusdc"

export const sunriseAssetMetadata: AssetMetadata = {
	[ASSET_ID_RISE]: {
		tickerDisplay: 'RISE',
		tickerSystem: 'RISE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
		exponents: 6
	},
	[ASSET_ID_VRISE]: {
		tickerDisplay: 'vRISE',
		tickerSystem: 'vRISE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
		exponents: 6
	},
	[ASSET_ID_USDRISE]: {
		tickerDisplay: 'USDrise',
		tickerSystem: 'USDrise',
		image:
			'https://raw.githubusercontent.com/sunriselayer/chain-registry/master/sunrise/images/usdrise.svg',
		exponents: 6,
		swap: {
			[ASSET_ID_USDN]: {
				interfaceProviderAddr: '',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
				}
			},
			[ASSET_ID_NOBLE_USDC]: {
				interfaceProviderAddr: '',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			}
		}
	},
	[ASSET_ID_USDN]: {
		tickerDisplay: 'USDN',
		tickerSystem: 'USDN',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'noble'
		},
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: '',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
				}
			}
		}
	},
	[ASSET_ID_NOBLE_USDC]: {
		tickerDisplay: 'USDC',
		tickerSystem: 'USDC',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'noble'
		},
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: '',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			}
		}
	}
};
