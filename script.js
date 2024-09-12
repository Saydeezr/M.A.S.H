const start = document.getElementById('play-btn');
const nextButton = document.querySelectorAll('.next-btn');
const backButton = document.querySelectorAll('.back-btn');
let formData = {};

//pulls up form and hides landing page section
const formPopUp = (event) => {
    event.preventDefault();

    console.log('Lets start the game!');
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');
};


//require all fields be filled out to move on to next form 
function checkForm(currentGroup) {
    const formGroup = document.getElementById(currentGroup);
    const inputs = formGroup.querySelectorAll('input');
    let isValid = true;

       // loops over all inputs
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].required = true;
            // console.log(inputs[i].value);
        // if input left empty, notifies user
            if (!inputs[i].value) {
                console.log('INPUT REQUIRED');
                isValid = false;
            } else {
                formData[inputs[i].id] =inputs[i].value
                
            }
        }
        console.log(formData)
        return isValid;
};


//navigate between forms/form groups
function showForm(event) {
    if (event) {
        event.preventDefault();
    }

    const button = event.target;
    const targetGroupId = button.getAttribute('data-target');
    console.log('Navigating to:', targetGroupId);

    const currentGroup = document.querySelector('.form-group:not(.hidden)');
    const currentGroupId = currentGroup.id;

    console.log('Current visible group:', currentGroup);

    //validate current form
    if (checkForm(currentGroupId)) {
        // Hide all forms and show the target form
    const forms = document.querySelectorAll('.form-group');
    forms.forEach(form => form.classList.add('hidden'));
    document.getElementById(targetGroupId).classList.remove('hidden');
    }
  };


  //function to get calculate results
  const submitResults = () => {
    console.log('Submitted Results!');
    console.log(formData);
  };


start.addEventListener("click", formPopUp); 

nextButton.forEach(button => {
    button.addEventListener('click', (event) => {
        showForm(event);
    });
});

backButton.forEach(button => {
    button.addEventListener('click', (event) => {
        showForm(event);
    });
});