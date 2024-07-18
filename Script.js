const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
}





const optionMenu = document.querySelector(".select-menu"),
      selectBtn= optionMenu.querySelector(".select-btn"),
      options= optionMenu.querySelectorAll(".option"),
      sBtn_text= optionMenu.querySelector(".sBtn-text");

      selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(Option =>{
    Option.addEventListener("click", (()=>{
        let selectedOption= Option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
       
        optionMenu.classList.remove("active");
    }))
})

function showPopup(imageSrc, title, description) {
    document.getElementById('popup-image').src = 'images/' + imageSrc;
    document.getElementById('popup-description').innerHTML = '<h5>' + title + '</h5><p>' + description + '</p>';
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Get the modal
var modal = document.getElementById("popupModal");

// Get the button that opens the modal
var btn = document.getElementById("popupButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
