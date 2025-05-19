import { create } from '@bufbuild/protobuf';
import { RoutePoolSchema } from '@sunriselayer/client/types/swap';
import type { AssetMetadata } from '../../types/asset';

export const ASSET_ID_RISE = 'urise';
export const ASSET_ID_VRISE = 'uvrise';
export const ASSET_ID_OSMO_OSMOSIS =
	'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518';
export const ASSET_ID_AUSDC_NEUTRON =
	'ibc/88012ABE034CE754022417BFEDF29F8B16C5B3338386EA20298ADCECA8329019';

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
					value: create(RoutePoolSchema, { poolId: BigInt(0) })
				}
			},
			uusdc: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
				}
			},
			uusdt: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
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
					value: create(RoutePoolSchema, { poolId: BigInt(0) })
				}
			},
			stuatom: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(6) })
				}
			},
			[ASSET_ID_AUSDC_NEUTRON]: {
				interfaceProviderAddr: 'sunrise1v0h8j7x7kfys29kj4uwdudcc9y0nx6tw2f955q',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(9) })
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
		},
		swap: {
			uatom: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(6) })
				}
			}
		}
	},
	[ASSET_ID_OSMO_OSMOSIS]: {
		tickerDisplay: 'OSMO',
		tickerSystem: 'OSMO',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'osmosis'
		},
		swap: {
			uatom: {
				interfaceProviderAddr: 'sunrise1v0h8j7x7kfys29kj4uwdudcc9y0nx6tw2f955q',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(7) })
				}
			},
			[ASSET_ID_AUSDC_NEUTRON]: {
				interfaceProviderAddr: 'sunrise1v0h8j7x7kfys29kj4uwdudcc9y0nx6tw2f955q',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(10) })
				}
			}
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
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
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
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			},
			uusdc: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(3) })
				}
			}
		}
	}
};
