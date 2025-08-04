install:
	npm ci

start:
	npm run dev

build:
	npm run build

deploy:
	npm run deploy

lint:
	npx eslint . --ext .js,.jsx,.ts,.tsx
