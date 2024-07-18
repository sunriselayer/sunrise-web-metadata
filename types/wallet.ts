export enum AddressType {
	Cosmos = 'cosmos',
	Bitcoin = 'bitcoin',
	Evm = 'evm',
	Svm = 'svm'
}

export enum WalletType {
	KeplrExtension = 'keplr-extension',
	LeapExtension = 'leap-extension',
	XdefiExtension = 'xdefi-extension',
	MetamaskExtension = 'metamask-extension'
}

export type AddressTypeMetadata = Record<
	AddressType,
	{
		name: string;
	}
>;

export type WalletTypeMetadata = Record<
	WalletType,
	{
		name: string;
		image: string;
		supprtedAddressTypes: AddressType[];
	}
>;
