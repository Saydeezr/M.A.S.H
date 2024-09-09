const start = document.getElementById('play-btn');
const next = document.getElementById('next');

//pulls up form and hides landing page section
const formPopUp = async (event) => {
    event.preventDefault();

    console.log('I have been clicked! Lets start the game!');
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');
}

//makes sure field is not empty for name
next.addEventListener("click", (event) => {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();

    if(!name) {
        const errorMsg = document.getElementById('error');
        errorMsg.textContent = "(Name is required)";
        return;
    } console.log('Name: ', name);
      showForm('lover-group');
});

document.getElementById('gameForm').addEventListener('submit', 
    function(event) {
        if(!this.checkValidity()) {
            event.preventDefault();
            alert('Please fill out all fields.')
            return;
        }
    })

//function to navigate between forms [back and forwards]
function showForm(formId) {
    const forms = document.querySelectorAll('.form-group');
    forms.forEach(form => form.classList.add('hidden'));
    document.getElementById(formId).classList.remove('hidden');
  }

  //function to get calculate results
  const submitResults = () => {
    console.log('Submitted Results!')
  }

start.addEventListener("click", formPopUp);        