document.addEventListener('DOMContentLoaded', function() {
    console.log('js');
    // Anything that should come in on page load goes here
    onload();
    getPosts();

  })

  function onload() {
      $('#submit-post').on('click', function() {
          console.log('jq');
      })
  }

  function sendMessageToServer(msg) {
    console.log('send to server');
    $.ajax({
        method: 'POST',
        url: '/blogs',
        data: msg
    }).then(function (response) {
        console.log('back from server');
        // clear inputs
        $('#in-name').val('');
        $('#in-msg').val('');
        getPosts();
    })
}

function getPosts() {
    $.ajax({
        method: 'GET',
        url: '/blogs'
    })
        .then(function (response) {
            console.log('Got messages', response);
            renderMessages(response);
        })
}

function renderMessages(array) {
    $('#messages').empty();
    for (const item of array) {
        $('#messages').append(`<p>${item.name}: ${item.text}</p>`)
    }
}