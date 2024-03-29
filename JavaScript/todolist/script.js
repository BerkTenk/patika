document.addEventListener('DOMContentLoaded', function() {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
        const myUL = document.getElementById('myUL');
        myUL.innerHTML = savedList;

        const closeButtons = document.querySelectorAll('.close');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                var div = this.parentElement;
                div.style.display = 'none';
                updateLocalStorage(myUL);
            });
        });
    }
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function updateLocalStorage(ulElement) {
  localStorage.setItem('todoList', ulElement.innerHTML);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    var input = document.getElementById('myInput');
    var inputValue = input.value.trim(); // Trim leading and trailing spaces

    if (inputValue === '') {
      showErrorToast('Listeye boş ekleme yapamazsınız!');
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
        showSuccessToast('Listeye eklendi.');
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


  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  };

  function showSuccessToast() {
    var successToast = document.getElementById('successToast');
    var toast = new bootstrap.Toast(successToast);
    toast.show();
  }
  
  function showErrorToast() {
    var errorToast = document.getElementById('errorToast');
    var toast = new bootstrap.Toast(errorToast);
    toast.show();
  }
