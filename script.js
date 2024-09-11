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
function checkForm() {
    const forms = document.querySelectorAll('form');
    const form = forms[0]
    const inputs = form.querySelectorAll('input');
    let allFilled = true;
       // loops over all inputs
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].required = true;
            console.log(inputs[i].value);
        // if input left empty, notifies user
            if (!inputs[i].value) {
                console.log('INPUT REQUIRED');
                alert('Please fill out all required fields.');
                allFilled = false;
               return;
            }
        }

        if (!allFilled) {
            return; 
        }
    // }
};


//navigate between forms and handles hideness/display
function showForm(formId) {
    const forms = document.querySelectorAll('.form-group');
    forms.forEach(form => form.classList.add('hidden'));
    document.getElementById(formId).classList.remove('hidden');

    checkForm(); 
  };


  //function to get calculate results
  const submitResults = () => {
    console.log('Submitted Results!')
  };

start.addEventListener("click", formPopUp);        