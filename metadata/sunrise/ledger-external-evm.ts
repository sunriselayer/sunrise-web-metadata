import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const sunriseExternalEvmMetadata: LedgerMetadata = {
	ethereum: {
		name: 'Ethereum',
		chainId: '0x1',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
		rpc: ['https://mainnet.infura.io/v3/c2b70c37395240a4b7cb6303ebb55b81'],
		assets: {
			eth: {
				tickerDisplay: 'ETH',
				tickerSystem: 'ETH',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
				exponents: 18
			},
			'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
				tickerDisplay: 'USDC',
				tickerSystem: 'USDC',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
				exponents: 6
			},
			'0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE': {
				tickerDisplay: 'SHIB',
				tickerSystem: 'SHIB',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
				exponents: 18
			},
			'0x6982508145454Ce325dDbE47a25d4ec3d2311933': {
				tickerDisplay: 'PEPE',
				tickerSystem: 'PEPE',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
				exponents: 18
			}
		},
		addressType: AddressType.Evm
	},
	optimism: {
		name: 'Optimism',
		chainId: 'Oxa',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
		rpc: ['https://optimism-mainnet.infura.io/v3/c2b70c37395240a4b7cb6303ebb55b81'],
		assets: {
			op: {
				tickerDisplay: 'OP',
				tickerSystem: 'OP',
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
				exponents: 18
			}
		},
		addressType: AddressType.Evm
	},
	oasys: {
		name: 'Oasys',
		chainId: '0xf8',
		image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
		rpc: ['https://rpc.mainnet.oasys.games'],
		assets: {
			oas: {
				tickerDisplay: 'OAS',
				tickerSystem: 'OAS',
				image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
				exponents: 18
			}
		},
		addressType: AddressType.Evm
	}
};
