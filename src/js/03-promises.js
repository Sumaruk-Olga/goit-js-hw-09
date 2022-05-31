import Notiflix from 'notiflix';

const KEY_TO_LOCALSTORAGE = "form-data-create-promises";

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step:document.querySelector('input[name="step"]'),
  amount:document.querySelector('input[name="amount"]'),
};

initPage();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onInputChange);


function onFormSubmit(event) {

  event.preventDefault();

if (refs.delay.value === "" || refs.step.value==="" || refs.amount.value==="") {
        alert('Please fill in all fields!');
        return;
    };

  const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
  const parsedSavedData = JSON.parse(savedData);
    // console.log('savedData', savedData);
  const delay = Number(parsedSavedData.delay);
  const step = Number(parsedSavedData.step);
  const amount = Number(parsedSavedData.amount);

  for (let i = 1; i <=amount; i += 1){  
    
    createPromise(i, (delay + i*step)).then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);    
  }).catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);    
  });   
    
  }
   
    localStorage.removeItem(KEY_TO_LOCALSTORAGE);
    refs.form.reset();    
}


function onInputChange(event) {
  const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
    let parsedSavedData;
    // console.log('savedData', savedData);
    if (savedData) {
        parsedSavedData = JSON.parse(savedData);
        
    } else {
        parsedSavedData = {};
    }
    
  parsedSavedData[event.target.name] = event.target.value;

  refs.delay.value = parsedSavedData.delay || "";
  refs.step.value = parsedSavedData.step || "";
  refs.amount.value = parsedSavedData.amount || "";
     
  localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(parsedSavedData));
}

function initPage() {
    const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
    let parsedSavedData;
    // console.log('savedData', savedData);
    if (savedData) {
        parsedSavedData = JSON.parse(savedData);        
   
    refs.delay.value = parsedSavedData.delay || "";
    refs.step.value = parsedSavedData.step || "";
    refs.amount.value = parsedSavedData.amount || "";
    } else {
        parsedSavedData = {};
    }
    // console.log('parsedSavedData', parsedSavedData);
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const result = { position, delay };
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      if (shouldResolve) {
      resolve(result);
    } else {
      reject(result);
    }
    }, delay);
  });

}


