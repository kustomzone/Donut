const yo = require('yo-yo')

// exported api

module.exports = function renderAlbumView () {
  return yo`
    <div>
      <a href="{{DAT_ARCHIVE_URL}}/">
        &laquo All albums
      </a>

      <div>
        <button id="share-btn" class="btn">Share</button>
        <label class="btn primary" for="files">
          Add photos +
          <input type="file" name="files" accept="image/*" multiple/>
        </label>
        <button id="more-btn" class="btn more">
          <span>▾</span>
          <div class="more-dropdown">
            <!-- TODO <div id="edit-info">Edit info</div> -->
            <div id="delete-selected">Delete selected</div>
            <a href="https://github.com/beakerbrowser/dat-photos-app/issues/">Report an issue</a>
          </div>
        </button>
      </div>
    </div>

    <div class="container">
      <div class="info">
        <h1></h1>
        <p class="desc"></p>
      </div>

      <div class="album-images"></div>
    </div>
    <textarea id="url"></textarea>
	
    <script src="{{DAT_ARCHIVE_URL}}/js/album.js"></script>
  `
}
