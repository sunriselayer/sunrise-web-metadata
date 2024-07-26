import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';

export const sunriseTestExternalEvmMetadata: LedgerMetadata = {
	ethereumsepolia: {
		name: 'Ethereum Sepolia Testnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
		rpc: ['https://sepolia.infura.io/v3/'],
		assets: {
			eth: {
				// todo change to ibc denom
				tickerDisplay: 'ETH',
				tickerSystem: 'ETH',
				base: 'eth',
				baseExponents: 18,
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
				exponents: 6
			},
			'ibc/94EB1E9A676004E74ECF47F8E4BF183F4017CE0630A4D1AC7C7D9EB9CD6A3D53': {
				// todo change to ibc denom
				tickerDisplay: 'axlUSDC',
				tickerSystem: 'aUSDC',
				base: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
				symbol: 'aUSDC',
				baseExponents: 6,
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Evm,
		explorer: {
			txPage: 'https://sepolia.etherscan.io/tx/${txHash}'
		},
		axelarGmp: {
			evmContractAddress: '0xD4cB4288708235DE1133C82cBADAE2B90C797E43',
			evmFunctionName: 'sunriseSwap',
			ibcChainName: 'osmosis-7',
			ibcChannelId: 'channel-8616',
			ibcContractAddress: 'osmo184j83glglw75ca6js53fn0tuuhzrfqeq3ealcnsnr679nhcw9f7smytymu'
		}
	},
	ethereummunbai: {
		name: 'Ethereum Munbai Testnet',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
		rpc: ['https://rpc-mumbai.maticvigil.com/'],
		assets: {
			eth: {
				// todo change to ibc denom
				tickerDisplay: 'ETH',
				tickerSystem: 'ETH',
				base: 'eth',
				baseExponents: 18,
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Evm
	},
	oasystestnet: {
		name: 'Oasys Testnet',
		image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
		rpc: ['https://rpc.testnet.oasys.games/'],
		assets: {
			oas: {
				// todo change to ibc denom
				tickerDisplay: 'OAS',
				tickerSystem: 'OAS',
				image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
				exponents: 6
			}
		},
		addressType: AddressType.Evm
	}
};
