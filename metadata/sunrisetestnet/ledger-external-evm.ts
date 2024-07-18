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
				baseDenom: 'eth',
				baseExponents: 18,
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
				exponents: 18
			}
		},
		addressType: AddressType.Evm
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
				baseDenom: 'eth',
				baseExponents: 18,
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
				exponents: 18
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
				exponents: 18
			}
		},
		addressType: AddressType.Evm
	}
};
