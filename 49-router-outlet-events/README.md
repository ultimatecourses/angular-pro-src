<a href="https://ultimateangular.com" target="_blank"><img src="https://toddmotto.com/img/ua.png"></a>

# Angular Fundamentals Seed

> This is the seed project for the [Angular Fundamentals](https://ultimateangular.com/courses/#angular-2) course by [Todd Motto](https://twitter.com/toddmotto).

## Project Setup and Tooling

### Tools

This course is recorded with the following tools, you can optionally follow along using the same, or your favourite text editor/IDE and browser.

*Text editor*: Visual Studio Code, you can [download it here](http://code.visualstudio.com) for both Mac, Windows and Linux.
*Browser*: Google Chrome, you can [download it here](https://www.google.com/chrome)

### Prerequisites

Please make sure that you have the following installed:

* Install the _latest version_ of [Node.js](http://nodejs.org) (Mac or Windows)
  * Mac users can optionally `brew install node` if they have [brew](http://brew.sh) installed

* Node Sass, you _may_ need it if you haven't already got it installed:

```bash
npm install -g node-sass
```

### Project Install

To grab the seed project, either Fork this repo or [click here to download](https://github.com/UltimateAngular/angular-fundamentals-seed/archive/master.zip) the `.zip` folder and extract the files wherever you like on your machine.

#### Step 1: Package Manager

To install the project dependencies, you will need to install `yarn`. To install `yarn`, run the following in your terminal:

```bash
npm install -g yarn
```

Mac users can alternatively use `brew` to install `yarn`.

```bash
brew update
brew install yarn
```

If you experience any issues when installing/using `yarn` you can checkout the installation instructions [here](https://yarnpkg.com/en/docs/install).

##### Step 2: Project Dependencies

Now that we have a package manager, we can install the project dependencies. You can do this by running:

```bash
yarn install
```

This will install our dependencies for running our Angular application.

#### Step 3: Running the project

During development, the project is built using `webpack-dev-server`. This provides a local development server as well as having webpack recompile our app when a file changes. The project will also automatically refresh the page whenever we make changes.

To start the project in development, run:

```
yarn start
```

This will output some information about the project (such as the TypeScript version and build progress). Once you see "build completed", you are ready to code!

Open your browser to [localhost:4000](http://localhost:4000) to start running the code.

### Project Tooling

The project uses `webpack` to build and compile all of our assets. This will do the following for us: 

- Compile all our TypeScript code into JavaScript (starting from `main.ts` and branching outwards from imported files)
- Bundle all our JavaScript into one file to use
- Allow us to use SASS for our component's CSS files
- Provide the polyfills needed to run our app in all modern browsers
- Mock a JSON backend using [json-server](https://github.com/typicode/json-server)
