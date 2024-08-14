import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';
import { ASSET_ID_AUSDC_NEUTRON } from './asset';

export const sunriseTestExternalEvmMetadata: LedgerMetadata = {
	ethereumsepolia: {
		name: 'Ethereum Sepolia',
		chainId: '0xaa36a7',
		image:
			'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
		rpc: ['https://sepolia.infura.io/v3/c2b70c37395240a4b7cb6303ebb55b81'],
		nativeCurrency: {
			name: 'SepoliaETH',
			symbol: 'ETH',
			decimals: 18
		},
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
				tickerDisplay: 'axlUSDC - Osmosis',
				tickerSystem: 'aUSDC',
				base: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
				symbol: 'aUSDC',
				baseExponents: 6,
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
				exponents: 6
			},
			[ASSET_ID_AUSDC_NEUTRON]: {
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
			url: 'https://sepolia.etherscan.io/',
			txPage: 'https://sepolia.etherscan.io/tx/${txHash}'
		},
		axelarGmp: {
			evmChainName: 'ethereum-sepolia',
			evmContractAddress: '0x8ef2c2b9825a52c44bff05b4dd7b72899ccbd4e4',
			evmFunctionName: 'sendToSunrise',
			ibcChainName: 'neutron',
			ibcSrcChannelId: 'channel-1097',
			ibcDstChannelId: 'channel-1',
			ibcContractAddress: 'neutron1s2gtqhnj9d6q5wjr44ll6uyd3xwn9a7fcn8t53yewjtq04ru52fsgupa3j'
		}
	},
	oasystestnet: {
		name: 'Oasys Testnet',
		chainId: '0x249c',
		image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
		rpc: ['https://rpc.testnet.oasys.games/'],
		nativeCurrency: {
			name: 'OAS',
			symbol: 'OAS',
			decimals: 18
		},
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
