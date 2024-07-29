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
			uatom: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 0 }
			},
			uusdc: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 1 }
			},
			uusdt: {
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
				pool: { poolId: 0 }
			},
			stuatom: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 6 }
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
				pool: { poolId: 6 }
			}
		}
	},
	'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518': {
		tickerDisplay: 'OSMO',
		tickerSystem: 'OSMO',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
		exponents: 6,
		bridge: {
			id: 'ibc',
			originLedgerId: 'osmosis'
		},
		swap: {
			[ASSET_ID_RISE]: {
				interfaceProviderAddr: 'sunrise1v0h8j7x7kfys29kj4uwdudcc9y0nx6tw2f955q',
				pool: { poolId: 8 }
			},
			uatom: {
				interfaceProviderAddr: 'sunrise1v0h8j7x7kfys29kj4uwdudcc9y0nx6tw2f955q',
				pool: { poolId: 7 }
			}
		}
	},
	'ibc/94EB1E9A676004E74ECF47F8E4BF183F4017CE0630A4D1AC7C7D9EB9CD6A3D53': {
		tickerDisplay: 'axlUSDC - Osmosis',
		tickerSystem: 'aUSDC',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
		exponents: 6,
		bridge: {
			id: 'ibc_axelar',
			originLedgerId: 'osmosis'
		},
		swap: {
			uatom: {
				interfaceProviderAddr: 'sunrise1v0h8j7x7kfys29kj4uwdudcc9y0nx6tw2f955q',
				pool: { poolId: 8 }
			}
		}
	},
	'ibc/88012ABE034CE754022417BFEDF29F8B16C5B3338386EA20298ADCECA8329019': {
		tickerDisplay: 'axlUSDC - Neutron',
		tickerSystem: 'aUSDC',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
		exponents: 6,
		bridge: {
			id: 'ibc_axelar',
			originLedgerId: 'neutron'
		},
		swap: {
			uatom: {
				interfaceProviderAddr: 'sunrise1v0h8j7x7kfys29kj4uwdudcc9y0nx6tw2f955q',
				pool: { poolId: 9 }
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
				pool: { poolId: 1 }
			},
			uusdt: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 3 }
			},
			ushib: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 4 }
			},
			uibgt: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 5 }
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
				pool: { poolId: 2 }
			},
			uusdc: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 3 }
			}
		}
	},
	uibgt: {
		tickerDisplay: 'iBGT',
		tickerSystem: 'iBGT',
		image: 'https://miro.medium.com/v2/resize:fill:176:176/1*yGFxA-Kv4_N5Z9TLfLNIRg.png',
		exponents: 6,
		swap: {
			uusdc: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 5 }
			}
		}
	},
	uweth: {
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
	uoas: {
		tickerDisplay: 'OAS.lcp',
		tickerSystem: 'OAS',
		image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
		exponents: 6
	},
	ushib: {
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
			uusdc: {
				interfaceProviderAddr: 'sunrise155u042u8wk3al32h3vzxu989jj76k4zcc6d03n',
				pool: { poolId: 4 }
			}
		}
	},
	upepe: {
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
