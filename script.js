const start = document.getElementById('play-btn');
const nextButton = document.querySelectorAll('.next-btn');
const backButton = document.querySelectorAll('.back-btn');
const submit = document.getElementById('submit-results');
const restart = document.getElementById('restart-btn');
let formData = {};

//pulls up form and hides landing page section
const formPopUp = (event) => {
    event.preventDefault();

    console.log('Lets start the game!');
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');
};


//require all fields be filled out to move on to next form + collecting data
function checkForm(currentGroup) {
    const formGroup = document.getElementById(currentGroup);
    const inputs = formGroup.querySelectorAll('input');
    let isValid = true;

       // loops over all inputs
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].required = true;
        // if input left empty, notifies user
            if (!inputs[i].value) {
                console.log('INPUT REQUIRED');
                const errorMsg = document.getElementById('error');
                errorMsg.textContent = 'All fields required';
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

    //validate current form
    if (checkForm(currentGroupId)) {
        // Hide all forms and show the target form
    const forms = document.querySelectorAll('.form-group');
    forms.forEach(form => form.classList.add('hidden'));
    document.getElementById(targetGroupId).classList.remove('hidden');
    }
  };


  //function to get calculate results
  const calculateResults = (formData) => {
    document.getElementById('section2').classList.add('hidden');
    document.getElementById('section3').classList.remove('hidden');

    console.log('Submitted Results!');
    console.log('Form Data:', formData);

    homeOptions = ["mansion", "apartment", "shack", "house"]
    loverOptions = [lover1.value, lover2.value, lover3.value, lover4.value];
    jobOptions = [job1.value, job2.value, job3.value, job4.value];
    transportOptions = [transport1.value, transport2.value, transport3.value, transport4.value];
    moneyOptions = [money1.value, money2.value, money3.value, money4.value];
    petOptions = [pet1.value, pet2.value, pet3.value, pet4.value];

    const randomHomeSelection = Math.floor(Math.random() * homeOptions.length);
    const randomLoverSelection = Math.floor(Math.random() * loverOptions.length);
    const randomJobSelection = Math.floor(Math.random() * jobOptions.length);
    const randomTransportSelection = Math.floor(Math.random() * transportOptions.length);
    const randomMoneySelection = Math.floor(Math.random() * moneyOptions.length);
    const randomPetSelection = Math.floor(Math.random() * petOptions.length);
   
    const pickHome = homeOptions[randomHomeSelection];
    const pickLover = loverOptions[randomLoverSelection];
    const pickJob = jobOptions[randomJobSelection];
    const pickTransport = transportOptions[randomTransportSelection];
    const pickMoney = moneyOptions[randomMoneySelection];
    const pickPet = petOptions[randomPetSelection];

    
    const loverSection = document.getElementById('lover-result');
    loverSection.textContent = `You will spend the rest of your life with ${pickLover} living together in your ${pickHome}.`;

    const jobSection = document.getElementById('job-result');
    jobSection.textContent = `You will spend your days as a professional ${pickJob}.`;

    const transportSection = document.getElementById('transport-result');
    transportSection.textContent = `Life will be a breeze as you get by on your ${pickTransport}.`;

    const moneySection = document.getElementById('money-result');
    moneySection.textContent = `You will be the top earner at about ${pickMoney} per year.`;

    const petSection = document.getElementById('pet-result');
    petSection.textContent = `At the end of a long day, you will always have your pet ${pickPet} to greet you when you get home.`;
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

submit.addEventListener('click', (event) => {
    event.preventDefault();
    calculateResults(formData);
});

restart.addEventListener('click', () => { 
    location.reload();
});