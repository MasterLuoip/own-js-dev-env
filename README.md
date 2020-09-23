# own-js-dev-env
A javascript develop environment built

1. Repo: **Github**
2. Editor configuration: **.editorconfig**
3. Package managerment: **npm**
4. Web Server: **Express** run project on browser (used in dev env)
5. Expose public ip: **localtunnel** (punch a hole in firewall)
6. Automation: **npm scripts**
7. Transpiler: **Babel**
8. Bundling: **webpack** bundle reason: commonJS doesn’t work in web progress
9. Sourcemap: **source-map**, covert transpiled and bundled file back to original in browser
10. Linter: **eslint + npm package eslint-watch**
11.	Unit Test: 
		1. Framework: **Mocha**
		2. Assertion library: **Chai**
		3. Helper: **JSDOM**. for test running on Browser enviroment. Optionally, headless Browser (doesn’t have UI, faster)
		4. Where to run tests: **Node**
		5. Test files belong, centralized or Alongside: **Alongside** (code structure)
		6. When: auto run on every time hit save?: **Upon save use test --watch**
12.	CI server: build app when commit, run tests, check code coverage, if code coverage is below requirement, and automate deployment. **Travis CI (linux server) appveyor (windows)**
13.	HTTP Call: node & browser **Axios**
		1. Centralized API calls: configure all calls, handle preloader, logic, handle error and single seam for mocking
		2. Polyfill: **polyfill.io**
		3. Mock HTTP: (Optional Nock or Static Json) **development websever(JSON server: serve fake api, JSON schema faker: generate fake api data)**
14.	Project Structure:
		Utils: **POJO: use Pain Old Javascript Object, to reduce the connection with framework**
15.	Production build
	1. Minification: speed up pages loading tree-shaking **Minify JS uglifyJsPlugin()** (Production serves static assets, instead of using webpack)
	2. HTML generation: bundle assests in HTML, use **html-webpack-plugin**
	3. Tip: use **gzip compression** to reduce files size
	4. Bundle splitting: **webpack option** another file loads plugins, omit the same plugin in main.js
	5. Busting cache: save js file for up to 1 year
			1. Hash bundle file
			2. **Generate HTML dynamically** (only code change, names will change)
			3. Error logging: **track.js** (unimplemented since signup required)
16.	Production Deploy
		1. Separate the UI and API
		2. Cloud Hosting:
				1. API – **HEROKU** node.js friendly Ps: Cors Package: to make ajax calls to different domain (take code from github and upload to url)
				2. UI – **Surge**
				3. Update Starter kit: **npm package**: centralize files likely to be updated/changed to a npm package, decentralized stable files

