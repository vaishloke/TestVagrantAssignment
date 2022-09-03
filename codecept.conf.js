const { setHeadlessWhen } = require("@codeceptjs/configure");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run

exports.config = {

  tests: "./*_test.js", // If you want to run single file then give its path over here & add script
  // in package.json as shown below in key value format.
  // "test-byFilePath": "npx codeceptjs run --verbose"
  // and give command on terminal >> npm run test-byFilePath
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://localhost:4444",
      path: "/wd/hub",
      browser: 'safari',  // options: `firefox`, `chrome`, `opera`, `safari`
      host: '127.0.0.1',
      port: 4444,
      restart: true, // will open new browser for every new feature file or scenario outline
      keepCookies: false,
      smartWait: 2000,
      timeout: 10000,
      windowSize: "maximize"
    }
  },
  include: {
    I: "./steps_file.js"
    // this refering to steps_file,js file in root folder. 
  },
  bootstrap: null,
  gherkin: {
    features: "./src/features/*.feature",
    //if you want to run many feature filess together depending on tags given to them then add script
    // in package.json as shown below in key value format.
    // "test-byTags": "npx codeceptjs run --grep '@RCB' --verbose"
    // and give command on terminal >> npm run test-byTags
    steps: "./src/steps/*.ts",
  },
  name: "Automation",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true,
      //use below commands on terminal to generate & serve allure reports post test execution
      //npx allure generate output
      // npx alluere serve output
    }

  }
}