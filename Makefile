###############################################
#
# Makefile
#
###############################################

build:
	npm install
	node node_modules/typescript/lib/tsc.js network/browser.ts test/test.ts

ntest:
	node node_modules/typescript/lib/tsc.js test/test.ts

btest:
	node node_modules/typescript/lib/tsc.js test/test.ts
	open https://rawgit.com/mlavergn/typescript-templates/master/test/index.html