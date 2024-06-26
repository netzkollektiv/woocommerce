export type Settings = {
	[ key: string ]: unknown;
} & { siteUrl?: string; shopUrl?: string } & {
	general?: {
		[ key: string ]: string;
	};
	tax?: {
		[ key: string ]: string;
	};
};

export type SettingsState = {
	[ key: string ]: {
		data?: unknown;
		lastReceived?: Date;
		error?: unknown;
		isRequesting?: boolean;
		dirty?: string[];
	};
};
