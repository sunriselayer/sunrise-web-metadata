import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const sunriseExternalCosmosMetadata: LedgerMetadata = {
	cosmoshub: {
		name: 'Cosmos Hub',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
		rpc: ['https://rpc.cosmos.nodestake.top'],
		assets: {
			uatom: {
				tickerDisplay: 'ATOM',
				tickerSystem: 'ATOM',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'cosmos'
	},
	celestia: {
		name: 'Celestia',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
		rpc: ['https://public-celestia-rpc.numia.xyz'],
		assets: {
			utia: {
				tickerDisplay: 'TIA',
				tickerSystem: 'TIA',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'celestia'
	},
	noble: {
		name: 'Noble',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
		rpc: ['https://noble-rpc.polkachu.com'],
		assets: {
			uusdc: {
				tickerDisplay: 'USDC',
				tickerSystem: 'USDC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'noble'
	},
	osmosis: {
		name: 'Osmosis',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
		rpc: ['https://rpc.osmosis.zone/'],
		assets: {
			uosmo: {
				tickerDisplay: 'OSMO',
				tickerSystem: 'OSMO',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
				exponents: 6
			},
			'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2': {
				tickerDisplay: 'ATOM',
				tickerSystem: 'ATOM',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6,
				bridge: {
					id: 'ibc',
					originLedgerId: 'cosmoshub'
				}
			},
			'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4': {
				tickerDisplay: 'USDC',
				tickerSystem: 'USDC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
				exponents: 6,
				bridge: {
					id: 'ibc',
					originLedgerId: 'noble'
				}
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'osmo'
	},
	kava: {
		name: 'Kava',
		image: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
		rpc: ['https://rpc.data.kava.io'],
		assets: {
			'erc20/tether/usdt': {
				tickerDisplay: 'USDT',
				tickerSystem: 'USDT',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Cosmos,
		prefix: 'kava'
	}
};
