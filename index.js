const text = "Search all the content";
const input = document.getElementById('searchInput');
let index = 0;
let autoTyping;

function typeText() {
    if (index < text.length) {
        input.value += text[index++];
        autoTyping = setTimeout(typeText, 500);  // Typing speed
    } else {
        setTimeout(deleteText, 2000);  // Pause before starting to delete
    }
}

function deleteText() {
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);
        autoTyping = setTimeout(deleteText, 300);  // Deleting speed
    } else {
        index = 0;
        setTimeout(typeText, 2000);  // Pause before starting to type again
    }
}

function clearInput() {
    clearTimeout(autoTyping);
    input.value = '';
    input.placeholder = 'Type a course...';
    input.readOnly = false;
    input.removeEventListener('focus', clearInput);
    sessionStorage.setItem('inputCleared', 'true');
}

function searchCourse() {
    const query = input.value.toLowerCase();
    
    if (query.includes('html')) {
        window.location.href = 'html.html';  // Replace with actual URL
    } else if (query.includes('css')) {
        window.location.href = 'css.html';  // Replace with actual URL
    }
    else if (query.includes('javascript')) {
        window.location.href = 'javascript.html';  // Replace with actual URL
    }
    else if (query.includes('react')) {
        window.location.href = 'react.html';  // Replace with actual URL
    }
    else if (query.includes('c')) {
        window.location.href = 'c.html';  // Replace with actual URL
    }
    else if (query.includes('c++')) {
        window.location.href = 'c++.html';  // Replace with actual URL
    }
    else if (query.includes('java')) {
        window.location.href = 'java.html';  // Replace with actual URL
    }
    else if (query.includes('phython')) {
        window.location.href = 'phython.html';  // Replace with actual URL
    }
     else {
        alert('Course not found');
    }
}

function initialize() {
    if (sessionStorage.getItem('inputCleared') === 'true') {
        clearInput();
    } else {
        input.readOnly = true;
        autoTyping = setTimeout(typeText, 1000);
    }
}

input.addEventListener('focus', clearInput);

// Initialize the typing effect or clear input based on session storage
initialize();

 // Get the modal
 var modal = document.getElementById("signupModal");

 // Get the button that opens the modal
 var btn = document.querySelector(".sign-up-btn");

 // Get the <span> element that closes the modal
 var span = document.querySelector(".close");

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
 