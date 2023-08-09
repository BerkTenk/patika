document.addEventListener('DOMContentLoaded', function() {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
        const myUL = document.getElementById('myUL');
        myUL.innerHTML = savedList;
    }
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var input = document.getElementById('myInput');
    var inputValue = input.value.trim(); // Trim leading and trailing spaces

    if (inputValue === '') {
        showError('You must write something!');
    } else {
        // Create new list item and append it to UL
        var li = document.createElement('li');
        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        var span = document.createElement('span');
        var txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        li.appendChild(span);

        // Save the new list HTML to localStorage
        const myUL = document.getElementById('myUL');
        myUL.appendChild(li);
        localStorage.setItem('todoList', myUL.innerHTML);
    }

    input.value = '';
};

  function showError(message) {
    var errorDiv = document.getElementById('error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error';
        document.body.appendChild(errorDiv);
    }   
    
    errorDiv.textContent = message;
    setTimeout(function() {
        errorDiv.textContent = '';
    }, 3000); // Clear the message after 3 seconds
}

  var span = document.createElement('span');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  };
