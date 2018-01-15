/* globals app */

const yo = require('yo-yo')
const renderProfileCard = require('../com/profile-card')
const renderFooter = require('../com/footer')
const renderWhoToFollow = require('../com/who-to-follow')
const renderProfileHeader = require('../com/profile-header')
const renderNewPostForm = require('../com/new-post-form')
const renderFeed = require('../com/feed')

// exported api
// =

module.exports = function () {
  return yo`
    <div class="view feed">
      <div class="sidebar-col">
        ${renderProfileCard(app.viewedProfile || app.currentUserProfile)}
        ${renderWhoToFollow()}
        ${renderFooter()}
        ${''/* TODO renderFriendsList(app.viewedProfile || app.currentUserProfile) */}
      </div>

      <div class="main-col">
        ${app.viewedProfile ? renderProfileHeader(app.viewedProfile) : ''}

        <div class="view-content">
          ${!app.viewedProfile ? renderNewPostForm() : ''}
        </div>

        ${renderFeed()}
      </div>
    </div>
  `
}
