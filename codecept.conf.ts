require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');
const { bootstrap } = require('./presettings.ts');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: true,
      windowSize: '1200x900',
      browser: 'chromium'
    },
    CustomHelper: {
      require: './CustomHelper.ts'
    }
  },
  bootstrap,
  include: {
    I: './steps.js',
    loginPage: './loginPage.ts',
    homePage: './homePage.ts'
  },
  name: 'typescript-boilerplate',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoLogin: {
			enabled: true,
      saveToFile: true,
			inject: 'login',
			users: {
				admin: {
					login: async (I: any) => await I.loginUser()
					,
					check: (I: any) => {
						// Empty function
          },
					fetch: () => {
						// Empty function
					},
					restore: () => {
						// Empty function
					},
				}
			}
		},
  }
}
