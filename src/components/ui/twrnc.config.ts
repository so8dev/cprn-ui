import { ClassInput, create, Style } from "twrnc";

// biome-ignore lint/style/noCommonJs: https://github.com/jaredh159/tailwind-react-native-classnames
const twFn = create(require(`./tailwind.config.js`));

// TODO: 計算ロジックは見直す、複数セレクタ指定もサポートできるようにする
function compute(
	selectors: {
		// Possible pseudo-class selectors
		hover?: boolean;
		focus?: boolean;
		active?: boolean;
		disabled?: boolean;

		// Possible structural selectors
		first?: boolean;
		last?: boolean;
		"not-first"?: boolean;
		"not-last"?: boolean;

		// Custom data attribute selectors
		"data-invalid"?: boolean;
	},
	...inputs: string[]
): string[] {
	return inputs
		.flatMap((input) => input.split(/\s+/))
		.filter((cls) => {
			if (cls.includes("hover:") && selectors.hover) return true;
			if (cls.includes("hover:") && !selectors.hover) return false;
			if (cls.includes("focus:") && selectors.focus) return true;
			if (cls.includes("focus:") && !selectors.focus) return false;
			if (cls.includes("active:") && selectors.active) return true;
			if (cls.includes("active:") && !selectors.active) return false;
			if (cls.includes("disabled:") && selectors.disabled) return true;
			if (cls.includes("disabled:") && !selectors.disabled) return false;

			if (cls.includes("not-first:") && selectors["not-first"]) return true;
			if (cls.includes("not-first:") && !selectors["not-first"]) return false;
			if (cls.includes("first:") && selectors.first) return true;
			if (cls.includes("first:") && !selectors.first) return false;

			if (cls.includes("not-last:") && selectors["not-last"]) return true;
			if (cls.includes("not-last:") && !selectors["not-last"]) return false;
			if (cls.includes("last:") && selectors.last) return true;
			if (cls.includes("last:") && !selectors.last) return false;

			if (cls.includes("data-invalid:") && selectors["data-invalid"])
				return true;
			if (cls.includes("data-invalid:") && !selectors["data-invalid"])
				return false;
			return true;
		})
		.map((cls) => {
			if (cls.includes("hover:")) return cls.replace("hover:", "");
			if (cls.includes("focus:")) return cls.replace("focus:", "");
			if (cls.includes("active:")) return cls.replace("active:", "");
			if (cls.includes("disabled:")) return cls.replace("disabled:", "");

			if (cls.includes("not-first:")) return cls.replace("not-first:", "");
			if (cls.includes("first:")) return cls.replace("first:", "");
			if (cls.includes("not-last:")) return cls.replace("not-last:", "");
			if (cls.includes("last:")) return cls.replace("last:", "");

			if (cls.includes("data-invalid:"))
				return cls.replace("data-invalid:", "");
			return cls;
		});
}

function styleWith(
	classes: {
		hover?: boolean;
		focus?: boolean;
		active?: boolean;
		disabled?: boolean;
		first?: boolean;
		last?: boolean;
		"not-first"?: boolean;
		"not-last"?: boolean;
		"data-invalid"?: boolean;
	},
	...inputs: ClassInput[]
): Style {
	const resolvedInputs: ClassInput[] = inputs
		.map((input) => {
			if (typeof input === "string") {
				return compute(classes, input);
			}

			if (Array.isArray(input)) {
				return compute(classes, ...input);
			}
			return [input];
		})
		.flat();
	return twFn.style(...resolvedInputs);
}

const tw = Object.assign(twFn, { styleWith });

export default tw;
