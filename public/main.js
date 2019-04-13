var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const song = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('bangers', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'song': song,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const song = this.parentNode.parentNode.childNodes[3].innerText
        fetch('bangers', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'song': song
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});