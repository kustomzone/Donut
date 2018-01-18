/* globals app */

const yo = require('yo-yo')

// exported api
// =

module.exports = function renderImageSettings () {
  // Don't show on new user creation
  const isNew = !app.currentUserProfile
  if ( isNew ) return yo``

  return yo`
    <div id="image-settings" class="settings-view image-settings-wrap">
      <h2>Image Settings</h2>

      <form class="image-settings" onsubmit=${onUpdateImageSettings}>
	   <p class="settings-view">
        <input ${isCurrentSetting('all') ? 'checked' : ''} type="radio" id="choice-all" name="embedImages" value="all">
        <label for="choice-all">Embed all images</label>
       </p>
	   <p class="settings-view">
        <input ${isCurrentSetting('dat') ? 'checked' : ''} type="radio" id="choice-dat" name="embedImages" value="dat">
        <label for="choice-dat">Embed only images from dat:// sources</label>
	   </p>
	   <p class="settings-view">
        <input ${isCurrentSetting('dat-followed') ? 'checked' : ''} type="radio" id="choice-dat-followed" name="embedImages" value="dat-followed">
        <label for="choice-dat-followed">Embed only images from dat:// sources I follow</label>
       </p>
	   <p class="settings-view">
        <input ${isCurrentSetting('none') ? 'checked' : ''} type="radio" id="choice-none" name="embedImages" value="none">
        <label for="choice-none">Don't embed images</label>
       </p>
	   <p class="settings-view">
        <div class="actions">
          <button type="button" class="btn" onclick=${app.gotoFeed}>Cancel</button>
          <button type="submit" class="btn primary">Save</button>
       </p>
        </div>
      </form>
    </div>
  `

  async function onUpdateImageSettings(e){
    e.preventDefault()

    // Load existing settings
    const settings = JSON.parse(window.localStorage.settings || '{}')

    // Save new value of settings
    const imageSetting = document.querySelector('input[name=embedImages]:checked').value
    settings.imageEmbed = imageSetting
    await app.updateSettings(settings)
    app.gotoFeed()
  }

  function isCurrentSetting(val){
    const settings = JSON.parse(window.localStorage.settings || '{}')
    return val === settings.imageEmbed || (!settings.imageEmbed && val === 'none')
  }
  
}
