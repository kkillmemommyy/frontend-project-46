install:
	npm ci --production
	npm link

install-dev:
	npm ci
	npm link

install-in-workflow:
	npm ci

uninstall:
	npm uninstall --global @hexlet/code

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	npx jest

test-cov:
	npx jest --coverage