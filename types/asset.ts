export interface RoutePool {
	poolId: number;
}

export interface RouteSeries {
	routes: Route[];
}

export interface RouteParallel {
	routes: Route[];
	weights: string[];
}

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
		baseDenom?: string; // denom in external chain
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
		pool?: RoutePool | undefined;
		series?: RouteSeries | undefined;
		parallel?: RouteParallel | undefined;
	};
};
