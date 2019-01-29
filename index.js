'use strict'

module.exports = function() {
  return (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage
}
