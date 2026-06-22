import type { RouteParallel, RoutePool, RouteSeries } from '@sunriselayer/client/types/swap';

export interface Route {
	denomIn: string;
	denomOut: string;
	pool?: RoutePool | undefined;
	series?: RouteSeries | undefined;
	parallel?: RouteParallel | undefined;
}

export type AssetMetadata = {
	[assetId: string]: {
		// denom in sunrise
		tickerDisplay: string;
		tickerSystem: string;
		image: string;
		exponents: number;
		base?: string; // denom in external chain (cosmos) or contract address (EVM)
		symbol?: string;
		baseExponents?: number; // exponent in external chain (Required only if different)
		bridge?: {
			id: string;
			originLedgerId: string;
		};
		swap?: SwapMetadata; // required only in Sunrise's AssetMetadata
		forwarding?: ForwardingMetadata;
	};
};

export type ForwardingMetadata = {
	// The key is the destination ledgerId
	[ledgerId: string]: {
		// The ledgerId of the intermediate chain
		intermediateLedgerId: string;
		// The channel from the intermediate chain to the destination chain
		channel: string;
		// The port from the intermediate chain to the destination chain
		port?: string; // defaults to 'transfer'
	};
};

export type SwapMetadata = {
	[denomOut: string]: {
		interfaceProviderAddr: string;
		strategy:
		| { value: RoutePool; case: 'pool' }
		| { value: RouteSeries; case: 'series' }
		| { value: RouteParallel; case: 'parallel' };
	};
};
