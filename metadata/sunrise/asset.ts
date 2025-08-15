import { RoutePoolSchema } from '@sunriselayer/client/types/swap';
import type { AssetMetadata } from '../../types/asset';
import { create } from '@bufbuild/protobuf';

export const ASSET_ID_RISE = 'urise';
export const ASSET_ID_VRISE = 'uvrise';
export const ASSET_ID_USDRISE = 'uusdrise';
export const ASSET_ID_USDN = 'ibc/A7AD825A4B48DDA0138D118655E60100D22A4D690C45B95221520B58C9A64B63';
export const ASSET_ID_USDY = 'ibc/AAF322A78A0E34B76CDA05BA9AE96DC1521F9E103EC576AB9931116B2AB8C26B';
export const ASSET_ID_NOBLE_USDC = "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5"
export const ASSET_ID_ATOM = "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"

export const sunriseAssetMetadata: AssetMetadata = {
	[ASSET_ID_RISE]: {
		tickerDisplay: 'RISE',
		tickerSystem: 'RISE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
		exponents: 6,
		base: ASSET_ID_RISE,
		baseExponents: 6
	},
	[ASSET_ID_VRISE]: {
		tickerDisplay: 'vRISE',
		tickerSystem: 'vRISE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
		exponents: 6,
		base: ASSET_ID_VRISE,
		baseExponents: 6
	},
	[ASSET_ID_USDRISE]: {
		tickerDisplay: 'USDrise',
		tickerSystem: 'USDrise',
		image:
			'https://raw.githubusercontent.com/sunriselayer/chain-registry/master/sunrise/images/usdrise.svg',
		exponents: 6,
		base: ASSET_ID_USDRISE,
		baseExponents: 6,
		swap: {
			[ASSET_ID_USDN]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(3) })
				}
			},
			[ASSET_ID_NOBLE_USDC]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			},
			[ASSET_ID_ATOM]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(4) })
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
		base: "uusdn",
		baseExponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'noble'
		},
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(3) })
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
		base: "uusdc",
		baseExponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'noble'
		},
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			}
		}
	},
	[ASSET_ID_USDY]: {
		tickerDisplay: 'USDY',
		tickerSystem: 'USDY',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
		exponents: 18,
		base: "ausdy",
		baseExponents: 18,
		bridge: {
			id: 'ibc',
			originLedgerId: 'noble'
		},
	},
	[ASSET_ID_ATOM]: {
		tickerDisplay: 'ATOM',
		tickerSystem: 'ATOM',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		exponents: 6,
		base: "uatom",
		baseExponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'cosmoshub'
		},
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(4) })
				}
			}
		}
	}
};
