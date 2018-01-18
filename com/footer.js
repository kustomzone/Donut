const yo = require('yo-yo')

// exported api

module.exports = function renderFooter () {
  return yo`
    <footer class="module">
      <nav>
        <a href="https://github.com/kustomzone/donut/blob/master/Readme.md">About Donut</a>
		<a href="https://github.com/datproject/awesome-dat">>About Dat</a>
        <a href="dat://beakerbrowser.com">About Beaker</a>
        <a href="https://github.com/kustomzone/donut">View Source</a>
      </footer>
    </header>
  `
}
