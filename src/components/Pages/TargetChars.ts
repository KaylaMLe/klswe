export interface TargetChar {
	"name": string;
	"isEnabled": boolean;
	"char": string;
}

export const DEFAULT_TARGET_CHARS: TargetChar[] = [
	{ name: "checkbox", isEnabled: true, char: "◻" },
]
