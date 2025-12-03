publish:
	npm publish --dry-run
lint: 
	npx eslint .
lint-fix:
	npx eslint . --fix
install: 
	npm ci
gendiff: 
	node bin/gendiff.js
test: 
	npm test