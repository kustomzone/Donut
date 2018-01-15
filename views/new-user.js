/* globals */

const yo = require('yo-yo')
const renderProfileEditor = require('../com/profile-editor')
const renderProfilePicker = require('../com/profile-picker')

// exported api
// =

module.exports = function () {
  return yo`
    <div class="view new-user">
      <div>
        <h1>Welcome to Donut!</h1>

        <p>
          Donut is a Fritter clone that shows how to build P2P web apps with;
          <a href="https://beakerbrowser.com">Beaker Browser</a>,
          <a href="https://datproject.org">Dat</a>, and
          <a href="https://github.com/beakerbrowser/webdb">WebDB</a>.
        </p>
      </div>

      <div>
        ${renderProfilePicker()}
      </div>

      <div>
        ${renderProfileEditor()}
      </div>
    </div>
  `
}
