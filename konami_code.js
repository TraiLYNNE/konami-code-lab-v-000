const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var i = 0

  document.body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[i]) {
      i++

      if (i === code.length - 1) {
        alert('Amen !! Do your thing !!')
        i = 0
      }
    } else {
      i = 0
    }
  })
}
