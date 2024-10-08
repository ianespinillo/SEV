export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-max-line-length': [1, 'always', 100],
		'footer-max-line-length': [1, 'always', 100],
		'header-max-length': [2, 'always', 72],
	},
};
