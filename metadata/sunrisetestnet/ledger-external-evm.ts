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
			ausdc: {
				// todo change to ibc denom
				tickerDisplay: 'axlUSDC',
				tickerSystem: 'aUSDC',
				base: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
				symbol: 'aUSDC',
				baseExponents: 18,
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
			ibcChainName: 'neutron',
			ibcChannelId: 'channel-1097',
			ibcContractAddress: 'neutron159alsvx4cl55aw3wku6lx3c9lsxeltwnyn9jk0a8rds3gd87swxq3uvr66',
			evmAbi: [
				{
					inputs: [
						{
							internalType: 'address',
							name: 'gateway_',
							type: 'address'
						},
						{
							internalType: 'address',
							name: 'gasReceiver_',
							type: 'address'
						},
						{
							internalType: 'string',
							name: 'chainName_',
							type: 'string'
						}
					],
					stateMutability: 'nonpayable',
					type: 'constructor'
				},
				{
					inputs: [],
					name: 'InvalidAddress',
					type: 'error'
				},
				{
					inputs: [],
					name: 'NotApprovedByGateway',
					type: 'error'
				},
				{
					inputs: [],
					name: 'chainName',
					outputs: [
						{
							internalType: 'string',
							name: '',
							type: 'string'
						}
					],
					stateMutability: 'view',
					type: 'function'
				},
				{
					inputs: [
						{
							internalType: 'bytes32',
							name: 'commandId',
							type: 'bytes32'
						},
						{
							internalType: 'string',
							name: 'sourceChain',
							type: 'string'
						},
						{
							internalType: 'string',
							name: 'sourceAddress',
							type: 'string'
						},
						{
							internalType: 'bytes',
							name: 'payload',
							type: 'bytes'
						}
					],
					name: 'execute',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function'
				},
				{
					inputs: [
						{
							internalType: 'bytes32',
							name: 'commandId',
							type: 'bytes32'
						},
						{
							internalType: 'string',
							name: 'sourceChain',
							type: 'string'
						},
						{
							internalType: 'string',
							name: 'sourceAddress',
							type: 'string'
						},
						{
							internalType: 'bytes',
							name: 'payload',
							type: 'bytes'
						},
						{
							internalType: 'string',
							name: 'tokenSymbol',
							type: 'string'
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256'
						}
					],
					name: 'executeWithToken',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function'
				},
				{
					inputs: [],
					name: 'gasReciever',
					outputs: [
						{
							internalType: 'contract IAxelarGasService',
							name: '',
							type: 'address'
						}
					],
					stateMutability: 'view',
					type: 'function'
				},
				{
					inputs: [],
					name: 'gateway',
					outputs: [
						{
							internalType: 'contract IAxelarGateway',
							name: '',
							type: 'address'
						}
					],
					stateMutability: 'view',
					type: 'function'
				},
				{
					inputs: [
						{
							internalType: 'string',
							name: 'destinationChain',
							type: 'string'
						},
						{
							internalType: 'string',
							name: 'destinationAddress',
							type: 'string'
						},
						{
							internalType: 'string',
							name: 'sunriseAddress',
							type: 'string'
						},
						{
							internalType: 'string',
							name: 'channelId',
							type: 'string'
						},
						{
							internalType: 'string',
							name: 'memo',
							type: 'string'
						},
						{
							internalType: 'string',
							name: 'symbol',
							type: 'string'
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256'
						}
					],
					name: 'sunriseSwap',
					outputs: [],
					stateMutability: 'payable',
					type: 'function'
				}
			]
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
