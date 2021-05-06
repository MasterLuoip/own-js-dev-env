# own-js-dev-env
A javascript develop environment built

## Starter kit

1. ### Repo: **Github**

2. ### Editor configuration

   **.editorconfig**

   * Configure Editor indent size, trim trailling whitespace

3. ### Package managerment: **npm**

   * Manage package, and install project dependencies
   * Another option: **Yarn** (from Facebook), The intention behind developing yarn(at that time) was to fix performance and security concerns with npm.

4. ### **Web Server**: 

   To run code in your local browser, you need a development web server, a few options:

   | **http-server**        | Light weight                                                 |
   | ---------------------- | ------------------------------------------------------------ |
   | **:trophy:Express.js** | **Comprehensive, configurable, production grade, can run it every where** |
   | **Webpack Dev Server** | **Built in to Webpack, serves from memory. hot reload**      |
   | Browsersunc            | All devices remain the same, good to regression test         |

   *Create-react-app uses the webpack Dev Server, but The webpack-dev-server is in fact a simple Express server that uses the webpack-dev-middleware under the hood.

5. ### Expose public ip: **localtunnel** (punch a hole in firewall)

   Either punch a hole in your local machine, or host your code in a cloud server

   | :trophy: Localtunnel | punch a hole in firewall, install globally and easy to use   |
   | -------------------- | ------------------------------------------------------------ |
   | Ngrok                | punch a hole in firewall. Securer, but more steps to set up compare to Localtunnel |
   | Vercel               | Deploy Node.js to Cloud. Can be used to production too.      |
   | Surge                | Move **static** files to public URL                          |

   

6. ### **Automation**: **npm scripts**

   Command to compile and run code

   | :trophy:Npm scripts | Popular. Declared in package.json. Leverage OS command line (BASH commands). Offer pre/post hooks. |
   | ------------------- | ------------------------------------------------------------ |
   | Grunt               | Old, configuration over code.                                |
   | Gulp                | Faster than Grunt code over confugration                     |

7. ### **Transpiler**:

   Compiler that can covert some late versions code to backward compatible. Usually from ECMA2015+ to priors.

   Here are the main things Babel can do for you:

   - Transform syntax
   - Polyfill features that are missing in your target environment (through a third-party polyfill such as [core-js](https://github.com/zloirock/core-js))
   - Source code transformations (codemods)

   | :trophy: Babel | Modern, standards-based JS (you can use Babel to compile Typescript) |
   | -------------- | ------------------------------------------------------------ |
   | Typescript     | Type safty, readability. Learning curve                      |

8. ### **Bundling**: **webpack**

   Purpose: 

   * **CommonJS doesn’t work in web browser**. Npm packages use the CommonJS pattern. Node can handle this just fine, but browsers don't understand it. So you need to bundle npm packages into a format that the browser can consume.

   * **Bundle splitting**. Package JS files into single or separted files for different pages, that way users only download needed page initially .

   * Improve Node perfomance

     | :trophy: Webpack | Bunldes more than just Js, can bundle CSS, images, etc like JS. Hot-reloading |
     | ---------------- | ------------------------------------------------------------ |
     | browserify       | bundle npm package for the web                               |
     | Rollup           | Tree shaking reduce bundle size faster loading production    |
     | Parcel           | Logic defaults code splitting.                               |
     | Snowpack         | Build once, cache forever focus on frontend.                 |
     | Require.js       | Outdated                                                     |

     

9. Sourcemap: **source-map**, covert transpiled and bundled file back to original in browser

10. Linter: **eslint + npm package eslint-watch**

11. Unit Test: 
    1. Framework: **Mocha**
    2. Assertion library: **Chai**
    3. Helper: **JSDOM**. for test running on Browser enviroment. Optionally, headless Browser (doesn’t have UI, faster)
    4. Where to run tests: **Node**
    5. Test files belong, centralized or Alongside: **Alongside** (code structure)
    6. When: auto run on every time hit save?: **Upon save use test --watch**

12. CI server: build app when commit, run tests, check code coverage, if code coverage is below requirement, and automate deployment. **Travis CI (linux server) appveyor (windows)**

13. HTTP Call: node & browser **Axios**
    1. Centralized API calls: configure all calls, handle preloader, logic, handle error and single seam for mocking
    2. Polyfill: **polyfill.io**
    3. Mock HTTP: (Optional Nock or Static Json) **development websever(JSON server: serve fake api, JSON schema faker: generate fake api data)**

14. Project Structure:
    	Utils: **POJO: use Pain Old Javascript Object, to reduce the connection with framework**

15. Production build
    1. Minification: speed up pages loading tree-shaking **Minify JS uglifyJsPlugin()** (Production serves static assets, instead of using webpack)
    2. HTML generation: bundle assests in HTML, use **html-webpack-plugin**
    3. Tip: use **gzip compression** to reduce files size
    4. Bundle splitting: **webpack option** another file loads plugins, omit the same plugin in main.js
    5. Busting cache: save js file for up to 1 year
    	1. Hash bundle file
    	2. **Generate HTML dynamically** (only code change, names will change)
    	3. Error logging: **track.js** (unimplemented since signup required)

16. Production Deploy
    1. Separate the UI and API
    2. Cloud Hosting:
    	1. API – **HEROKU** node.js friendly Ps: Cors Package: to make ajax calls to different domain (take code from github and upload to url)
    	2. UI – **Surge**
    	3. Update Starter kit: **npm package**: centralize files likely to be updated/changed to a npm package, decentralized stable files
    	4. 

