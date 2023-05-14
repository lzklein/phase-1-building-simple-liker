// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
modal.classList = "hidden";

const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(
  likeButton => likeButton.addEventListener('click', function(){
    mimicServerCall().catch((error)=>{
      modal.classList.remove("hidden");
      modal.textContent = error;
      setTimeout(function(){
        modal.classList = "hidden";
      }, 3000);
    })
    .then(data => {
      const likeGlyph = likeButton.querySelector('.like-glyph');
      if(likeGlyph.classList != "activated-heart"){
        likeGlyph.textContent = FULL_HEART;
        likeGlyph.classList = "activated-heart";
      }
      else{
        likeGlyph.textContent = EMPTY_HEART;
        likeGlyph.classList.remove("activated-heart");
      }
    }
    )
  })
)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
