import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import jsx from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import parser from '@typescript-eslint/parser';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactPlugin.configs.flat.recommended,
			prettier,
			jsx.flatConfigs.recommended,
			importPlugin.flatConfigs.recommended,
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: parser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@typescript-eslint/eslint-plugin': tsPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-hooks/exhaustive-deps': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react/react-in-jsx-scope': 'off',
			'import/named': 'off',
			'import/no-unresolved': 'off',
			'jsx-a11y/no-autofocus': 'off',
			'react/prop-types': 'off',
			'jsx-a11y/no-static-element-interactions': 'off',
			'jsx-a11y/click-events-have-key-events': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'index',
						'type',
						'object',
						'unknown',
						'parent',
						'sibling',
					],
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: '{.,..,**}/*.scss',
							group: 'sibling',
							position: 'after',
						},
					],
					alphabetize: {
						order: 'asc',
						caseInsensitive: false,
					},
				},
			],
		},

		settings: {
			react: {
				version: 'detect',
			},
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
				typescript: {
					project: '.',
					extensions: ['.tsx', '.ts'],
				},
			},
		},
	}
);
