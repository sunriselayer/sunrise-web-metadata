import type { AssetMetadata } from '../../types/asset';

export const ASSET_ID_RISE = 'urise';
export const ASSET_ID_VRISE = 'uvrise';

export const sunriseTestAssetMetadata: AssetMetadata = {
	[ASSET_ID_RISE]: {
		tickerDisplay: 'RISE',
		tickerSystem: 'RISE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
		exponents: 6,
		swap: {
			'ibc/uatom': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 0 }
			},
			'ibc/uusdc': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 1 }
			},
			'ibc/uusdt': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 2 }
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
	'ibc/uatom': {
		tickerDisplay: 'ATOM',
		tickerSystem: 'ATOM',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'cosmos_hub'
		},
		swap: {
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 0 }
			},
			'ibc/stuatom': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 6 }
			}
		}
	},
	'ibc/stuatom': {
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
			'ibc/uatom': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 6 }
			}
		}
	},
	'ibc/uusdc': {
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
				pool: { poolId: 1 }
			},
			'ibc/uusdt': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 3 }
			},
			'ibc/ushib': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 4 }
			},
			'ibc/uibgt': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 5 }
			}
		}
	},
	'ibc/uusdt': {
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
				pool: { poolId: 2 }
			},
			'ibc/uusdc': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 3 }
			}
		}
	},
	'ibc/uibgt': {
		tickerDisplay: 'iBGT',
		tickerSystem: 'iBGT',
		image: 'https://miro.medium.com/v2/resize:fill:176:176/1*yGFxA-Kv4_N5Z9TLfLNIRg.png',
		exponents: 6,
		swap: {
			'ibc/uusdc': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 5 }
			}
		}
	},
	'ibc/uweth': {
		tickerDisplay: 'wETH.axl',
		tickerSystem: 'ETH',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg',
		exponents: 6,
		bridge: {
			id: 'ibc_axelar',
			originLedgerId: 'ethereum'
		}
	},
	'ibc/uoas': {
		tickerDisplay: 'OAS.lcp',
		tickerSystem: 'OAS',
		image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
		exponents: 6
	},
	'ibc/ushib': {
		tickerDisplay: 'SHIB.axl',
		tickerSystem: 'SHIB',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
		exponents: 6,
		bridge: {
			id: 'ibc_axelar',
			originLedgerId: 'ethereum'
		},
		swap: {
			'ibc/uusdc': {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 4 }
			}
		}
	},
	'ibc/upepe': {
		tickerDisplay: 'PEPE.axl',
		tickerSystem: 'PEPE',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
		exponents: 6,
		bridge: {
			id: 'ibc_axelar',
			originLedgerId: 'ethereum'
		}
	}
};
