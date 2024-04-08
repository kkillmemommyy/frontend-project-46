install:
	npm ci --production
	npm link

install-dev:
	npm ci
	npm link

uninstall:
	npm uninstall --global @hexlet/code

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .
