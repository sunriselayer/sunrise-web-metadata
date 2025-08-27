import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const sunriseExternalEvmMetadata: LedgerMetadata = {
	ethereum: {
		name: 'Ethereum',
		chainId: '0x1',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
		rpc: ['https://mainnet.infura.io/v3/c2b70c37395240a4b7cb6303ebb55b81'],
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18
		},
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
		},
		addressType: AddressType.Evm,
		explorer: {
			url: 'https://etherscan.io/',
			txPage: 'https://etherscan.io/tx/${txHash}'
		},
		ibcEureka: {
			config: {
				ibcChain: 'cosmoshub',
				relayFeeRecipientAddress: '0x0000000000000000000000000000000000000000',
				eurekaFeeReceiver: 'cosmos1066ea436np9m6gf4q95q0nte2ctq84wuzahttk',
				ibcRelayAddress: 'cosmos1lqu9662kd4my6dww4gzp3730vew0gkwe0nl9ztjh0n5da0a8zc4swsvd22',
				ibcTransferContractAddress: 'cosmos1clswlqlfm8gpn7n5wu0ypu0ugaj36urlhj7yz30hn7v7mkcm2tuqy9f8s5',
				sourceClient: 'cosmoshub-0', // For Cosmos Hub mainnet connection
				destPort: 'transfer',
				counterpartyClientId: '08-wasm-1369'
			}
		}
	},
	// optimism: {
	// 	name: 'Optimism',
	// 	chainId: '0xa',
	// 	image:
	// 		'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
	// 	rpc: ['https://optimism-mainnet.infura.io/v3/c2b70c37395240a4b7cb6303ebb55b81'],
	// 	nativeCurrency: {
	// 		name: 'ETH',
	// 		symbol: 'ETH',
	// 		decimals: 18
	// 	},
	// 	assets: {
	// 		op: {
	// 			tickerDisplay: 'OP',
	// 			tickerSystem: 'OP',
	// 			image:
	// 				'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/optimism/images/op.svg',
	// 			exponents: 18
	// 		}
	// 	},
	// 	addressType: AddressType.Evm
	// },
	// oasys: {
	// 	name: 'Oasys',
	// 	chainId: '0xf8',
	// 	image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
	// 	rpc: ['https://rpc.mainnet.oasys.games'],
	// 	nativeCurrency: {
	// 		name: 'OAS',
	// 		symbol: 'OAS',
	// 		decimals: 18
	// 	},
	// 	assets: {
	// 		oas: {
	// 			tickerDisplay: 'OAS',
	// 			tickerSystem: 'OAS',
	// 			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
	// 			exponents: 18
	// 		}
	// 	},
	// 	addressType: AddressType.Evm
	// }
};
