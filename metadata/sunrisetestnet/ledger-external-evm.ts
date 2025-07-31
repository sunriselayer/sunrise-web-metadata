import type { LedgerMetadata } from '../../types/ledger';
import { AddressType } from '../../types/wallet';
import { ASSET_ID_PROVIDER_ATOM } from './asset';

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
			[ASSET_ID_PROVIDER_ATOM]: {
				tickerDisplay: 'ATOM',
				tickerSystem: 'transfer/hub-testnet-0/uatom',
				base: '0xc12F6Ce3f6f605Ca054817290e58a20D91DeF445',
				symbol: 'ATOM',
				baseExponents: 6,
				image:
					'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
				exponents: 6
			}
		},
		addressType: AddressType.Evm,
		explorer: {
			url: 'https://sepolia.etherscan.io/',
			txPage: 'https://sepolia.etherscan.io/tx/${txHash}'
		},
		ibcEureka: {
			config: {
				ibcChain: 'cosmosicsprovidertestnet',
				relayFeeRecipientAddress: '0x33C4DaD158F1E2cCF97bF17d1574d5b7b9f43002',
				ibcRelayAddress: 'cosmos1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq5d9fg9',
				ibcTransferContractAddress:
					'cosmos1uq4ztnt3lrtwx0ryjtvy66ncxd2q92fdg78mgxcr76mm2582xkwsqwrjr4',
				sourceClient: 'hub-testnet-0', // For Cosmos Hub testnet connection
				destPort: 'transfer',
				counterpartyClientId: '08-wasm-262'
			}
		}
	}
};
