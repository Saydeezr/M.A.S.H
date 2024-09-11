const start = document.getElementById('play-btn');
const next = document.getElementById('next');

//pulls up form and hides landing page section
const formPopUp = async (event) => {
    event.preventDefault();

    console.log('I have been clicked! Lets start the game!');
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');
};


//require all fields be filled out to move on to next form 
function checkForm(currentGroup) {
    const formGroup = document.getElementById(currentGroup);
    const inputs = formGroup.querySelectorAll('input');
    let allFilled = true;

       // loops over all inputs
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].required = true;
            console.log(inputs[i].value);
        // if input left empty, notifies user
            if (!inputs[i].value) {
                console.log('INPUT REQUIRED');
                allFilled = false;
            }
        }

        return allFilled;
};


//navigate between forms and handles hideness/display
function showForm(formId) {
    const currentGroup = document.querySelector('.form-group:not(.hidden)');
    const currentGroupId = currentGroup.id;

    if (checkForm(currentGroupId)) {
    const forms = document.querySelectorAll('.form-group');
    forms.forEach(form => form.classList.add('hidden'));
    document.getElementById(formId).classList.remove('hidden');

    }
  };


  //function to get calculate results
  const submitResults = () => {
    console.log('Submitted Results!')
  };

start.addEventListener("click", formPopUp);        