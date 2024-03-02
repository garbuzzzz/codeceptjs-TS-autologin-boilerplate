const { I } = inject()

export = {
  locator: 'body',
  testMethod: (msg: string) => {
    console.log(msg)
  },

  link () {
    I.waitForVisible(this.locator)
  }
}
