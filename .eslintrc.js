module.exports = {
	"extends": [
		"airbnb",
		"prettier",
		"prettier/react"
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 8,
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"experimentalDecorators": true,
			"jsx": true,
			"impliedStrict": true,
			"classes": true
		}
	},
	"env": {
		"browser": true,
		"node": true,
		"jquery": true
	},
	"settings": {
		"import/core-modules": [
			"react"
		]
	},
	"rules": {
		"no-unused-vars": [
			1,
			{
				"argsIgnorePattern": "res|next|^err"
			}
		],
		"arrow-body-style": [
			2,
			"as-needed"
		],
		"no-param-reassign": [
			2,
			{
				"props": false
			}
		],
		"comma-dangle": 0,
		"func-names": [0],
		"import": 0,
		"import/extensions": [1, "never"],
		"import/first": 0,
		"import/no-absolute-path": 0,
		"import/no-named-as-default": 0,
		"import/prefer-default-export": 0,
		"indent": 0,
		"linebreak-style": ["error", "unix"],
		"no-bitwise": ["error", {
			"allow": ["~"]
		}],
		"no-console": "off",
		"no-return-assign": [0],
		"no-underscore-dangle": [2, {
			"allow": ["_id"]
		}],
		"no-use-before-define": 0,
		"object-curly-newline": 0,
		"react/display-name": 1,
		"react/react-in-jsx-scope": 0,
		"react/forbid-prop-types": 0,
		"react/no-unescaped-entities": 0,
		"react/no-multi-comp": 0,
		"react/prefer-stateless-function": 0,
		"react/jsx-filename-extension": [1, {
			"extensions": [".js", ".jsx"]
		}],
		"space-before-function-paren": 0,
		"semi": ["error", "always"],
		"max-len": 0,
		"radix": 0,
		"no-shadow": [2, {
			"hoist": "all",
			"allow": [
				"resolve",
				"reject",
				"done",
				"next",
				"err",
				"error"
			]
		}],
		"quotes": [2, "single", {
			"avoidEscape": true,
			"allowTemplateLiterals": true
		}],
		"prettier/prettier": ["error", {
			"trailingComma": "es5",
			"singleQuote": true,
			"printWidth": 120
		}],
		"jsx-a11y/href-no-hash": "off",
		"jsx-a11y/anchor-is-valid": ["warn", {
			"aspects": [
				"invalidHref"
			]
		}]
	},  
	"globals": {
		"jest": true,
      		"test": true,
      		"expect": true,
      		"afterEach": true,
	},
	"plugins": [
		"prettier"
	]
}
