interface ImportMetaEnv {
	readonly VITE_PORTRAIT_IMG_URL: string;
	readonly VITE_ABOUT_ME_TXT: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
