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
