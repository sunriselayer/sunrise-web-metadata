import { create } from '@bufbuild/protobuf';
import { RoutePoolSchema } from '@sunriselayer/client/types/swap';
import type { AssetMetadata } from '../../types/asset';

export const ASSET_ID_RISE = 'urise';
export const ASSET_ID_VRISE = 'uvrise';
export const ASSET_ID_USDRISE = 'uusdrise';
export const ASSET_ID_PROVIDER_ATOM =
	'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2';

export const sunriseTestAssetMetadata: AssetMetadata = {
	[ASSET_ID_RISE]: {
		tickerDisplay: 'RISE',
		tickerSystem: 'RISE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
		exponents: 6,
		swap: {
			uatom: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
				}
			},
			uusdc: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			},
			uusdt: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(3) })
				}
			}
		}
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
	},
	uatom: {
		tickerDisplay: 'ATOM',
		tickerSystem: 'ATOM',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'cosmoshub'
		},
		swap: {
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
				}
			}
		}
	},
	stuatom: {
		tickerDisplay: 'stATOM',
		tickerSystem: 'stATOM',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'stride'
		}
	},
	[ASSET_ID_PROVIDER_ATOM]: {
		tickerDisplay: 'ATOM',
		tickerSystem: 'ATOM',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'cosmosicsprovidertestnet'
		}
	},
	uusdc: {
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
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			}
		}
	},
	uusdt: {
		tickerDisplay: 'USDT',
		tickerSystem: 'USDT',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'kava'
		},
		swap: {
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(3) })
				}
			}
		}
	}
};
