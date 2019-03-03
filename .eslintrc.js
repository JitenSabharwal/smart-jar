module.exports = {
  extends: ["standard", "standard-react"],
  "parser": "babel-eslint",
  rules: {
    semi: ["error", "never"],
    "comma-dangle": [
      "error",
      {
        objects: "always-multiline",
        arrays: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    curly: ["error", "multi-line"],
    "dot-notation": ["error", { allowKeywords: true }],
    "guard-for-in": "error",
    "no-caller": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-global-assign": ["error", { exceptions: ["app"] }],
    "no-loop-func": "error",
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-await": "error",
    "no-return-assign": ["error", "always"],
    "no-sequences": "error",
    "no-useless-call": "off",
    "no-with": "error",
    "require-await": "off",
    "vars-on-top": "error",
    "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],
    "no-new-require": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-var": "error",
    "object-shorthand": [
      "warn",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "warn",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    strict: ['error', 'never'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement *']
    }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],
    'lines-around-comment': 'off',
    'max-len': ['error', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'max-statements': ['off', 20],
    'max-statements-per-line': ['off', { max: 1 }],
    'no-mixed-spaces-and-tabs': 'error',
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],
    'one-var-declaration-per-line': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    "max-nested-callbacks": ["error", 5],
  },
  env: {
    node: true
  },
  "globals": {
    "localStorage": true,
    "fetch": true,
    "FormData": true,
    "FileReader": true,
  }
}
