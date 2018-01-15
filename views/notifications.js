/* globals app */

const yo = require('yo-yo')
const renderProfileCard = require('../com/profile-card')
const renderFooter = require('../com/footer')
const renderWhoToFollow = require('../com/who-to-follow')
const renderNotifications = require('../com/notifications')

// exported api
// =

module.exports = function () {
  return yo`
    <div class="view notifications">
      <div class="sidebar-col">
        ${renderProfileCard(app.currentUserProfile)}
        ${renderWhoToFollow()}
        ${renderFooter()}
      </div>

      <div class="main-col">
        ${renderNotifications()}
      </div>
    </div>
  `
}
