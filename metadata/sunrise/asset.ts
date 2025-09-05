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
export const ASEET_ID_WBTC = "ibc/0E293A7622DC9A6439DB60E6D234B5AF446962E27CA3AB44D0590603DFF6968E"
export const ASSET_ID_WETH = "ibc/694A6B26A43A2FBECCFFEAC022DEACB39578E54207FDD32005CD976B57B98004"
export const ASSET_ID_USDT = "ibc/D4FF12988C31AD8E3D2555621F95C7EB2B6FBAAD2F9487FB11A2A8BBB004B4B3"
export const ASSET_ID_OSMO = "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"

export const sunriseAssetMetadata: AssetMetadata = {
	[ASSET_ID_RISE]: {
		tickerDisplay: 'RISE',
		tickerSystem: 'RISE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
		exponents: 6,
		base: ASSET_ID_RISE,
		baseExponents: 6,
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
				}
			}
		}
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
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(1) })
				}
			},
			[ASSET_ID_NOBLE_USDC]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(2) })
				}
			},
			[ASSET_ID_USDN]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(3) })
				}
			},
			[ASSET_ID_ATOM]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(4) })
				}
			},
			[ASSET_ID_USDY]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(5) })
				}
			},
			[ASEET_ID_WBTC]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(6) })
				}
			},
			[ASSET_ID_WETH]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(7) })
				}
			},
			[ASSET_ID_USDT]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(8) })
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
		base: 'uusdc',
		baseExponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'noble'
		},
		forwarding: {
			cosmoshub: {
				intermediateLedgerId: 'noble',
				channel: 'channel-4',
				port: 'transfer'
			},
			osmosis: {
				intermediateLedgerId: 'noble',
				channel: 'channel-1',
				port: 'transfer'
			}
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
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(5) })
				}
			}
		}
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
			},
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(9) })
				}
			}
		}
	},
	[ASEET_ID_WBTC]: {
		tickerDisplay: 'WBTC',
		tickerSystem: 'WBTC',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
		exponents: 8,
		base: "ibc/D742E8566B0B8CC8F569D950051C09CF57988A88F0E45574BFB3079D41DE6462",
		baseExponents: 8,
		bridge: {
			id: 'ibc',
			originLedgerId: 'cosmoshub'
		},
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(6) })
				}
			},
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(10) })
				}
			}
		}
	},
	[ASSET_ID_WETH]: {
		tickerDisplay: 'WETH',
		tickerSystem: 'ETH',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg',
		exponents: 18,
		base: "ibc/C0B53D3D23827AE38058BED0BDCD554229278AF530A8D265FCF6DFF7C4B2ADFF",
		baseExponents: 18,
		bridge: {
			id: 'ibc',
			originLedgerId: 'cosmoshub'
		},
		swap: {
			[ASSET_ID_USDRISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(7) })
				}
			},
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise1xxgjt7yqkmn63m2d0nrf0vt5uuc2hr6l45xaa9',
				strategy: {
					case: 'pool',
					value: create(RoutePoolSchema, { poolId: BigInt(11) })
				}
			}
		}
	},
	[ASSET_ID_USDT]: {
		tickerDisplay: 'USDT',
		tickerSystem: 'USDT',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
		exponents: 6,
		base: "ibc/E7E51FFF94A8B55BE84CEB0345E5CAF0A5DAEB374C6806CE908098B8996C7782",
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
					value: create(RoutePoolSchema, { poolId: BigInt(8) })
				}
			}
		}
	},
	[ASSET_ID_OSMO]: {
		tickerDisplay: 'OSMO',
		tickerSystem: 'OSMO',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
		exponents: 6,
		base: "uosmo",
		baseExponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'osmosis'
		},
	}
};
