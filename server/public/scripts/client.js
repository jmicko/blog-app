document.addEventListener('DOMContentLoaded', function() {
    console.log('js');
    // Anything that should come in on page load goes here
    onload();
  })

  function onload() {
      $('#submit-post').on('click', function() {
          console.log('jq');
      })
  }