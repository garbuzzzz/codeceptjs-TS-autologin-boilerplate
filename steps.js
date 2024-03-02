module.exports = function() {
  return actor({
    loginUser() {
      this.amOnPage('https://gtmetrix.com/');
      this.fillField("input[type='url']", 'https://google.com/') //! this line throw the error
      this.click('.analyze-form-button')
      this.see('Adding job to queue...')
    }
  })
}
