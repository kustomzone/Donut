/* globals app */

const yo = require('yo-yo')

// globals
let isHovering
let btnText

// exported api
// =

module.exports = function renderFollowButton (profile) {
  const profileUrl = profile.url || profile.getRecordOrigin()
  if (app.currentUser.url === profileUrl) return ''

  let cls = ''
  if (app.isCurrentUserFollowing(profile)) {
    if (isHovering === app.profileUrl(profile)) {
      btnText = 'Unfollow'
      cls = 'unfollow'
    } else {
      btnText = 'Following'
      cls = 'following'
    }
  } else {
    btnText = 'Follow'
    cls = ''
  }
  return yo`
    <button class="pmsg-btn btn ${cls}" onclick=${onTogglePM} onmouseover=${onMouseOver} onmouseout=${onMouseOut}>PM</button>
	
    <button class="follow-btn btn ${cls}" onclick=${onToggleFollowing} onmouseover=${onMouseOver} onmouseout=${onMouseOut}>
      ${btnText}
    </button>`

  // TODO (Private Messaging)
  async function onTogglePM (e) {
    e.preventDefault()
    e.stopPropagation()
    // await app.togglePM(profile)
  }
  
  async function onToggleFollowing (e) {
    e.preventDefault()
    e.stopPropagation()
    await app.toggleFollowing(profile)
  }

  function onMouseOver () {
    if (!isHovering) {
      isHovering = app.profileUrl(profile)
      app.render()
    }
  }

  function onMouseOut () {
    if (isHovering) {
      isHovering = null
      app.render()
    }
  }
}
