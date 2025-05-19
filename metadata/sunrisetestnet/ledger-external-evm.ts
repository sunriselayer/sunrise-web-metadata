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
	}
	// oasystestnet: {
	// 	name: 'Oasys Testnet',
	// 	chainId: '0x249c',
	// 	image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
	// 	rpc: ['https://rpc.testnet.oasys.games/'],
	// 	nativeCurrency: {
	// 		name: 'OAS',
	// 		symbol: 'OAS',
	// 		decimals: 18
	// 	},
	// 	assets: {
	// 		oas: {
	// 			// todo change to ibc denom
	// 			tickerDisplay: 'OAS',
	// 			tickerSystem: 'OAS',
	// 			image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22265.png',
	// 			exponents: 6
	// 		}
	// 	},
	// 	addressType: AddressType.Evm
	// }
};
