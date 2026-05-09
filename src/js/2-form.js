
const STORAGE_KEY = 'feedback-form-state';
const formData = {
    email: '',
    message: ''
}
 const form = document.querySelector(`.feedback-form`);
form.addEventListener(`input`, onFormInput);
form.addEventListener(`submit`, onFormSubmit);
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
if (savedData) {
    form.elements[`email`].value = savedData.email || '';
    form.elements[`message`].value = savedData.message || '';

     formData.email = savedData.email || '';
  formData.message = savedData.message || '';
}
function onFormInput() {
    formData.email = form.elements[`email`].value.trim();
    formData.message = form.elements[`message`].value.trim();
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(event) {
    event.preventDefault();
    const email = form.elements[`email`].value.trim();
    const message = form.elements[`message`].value.trim();
    if (email === '' || message === '') {
        alert('Fill please all fields');
        return;
    } else {
        formData.email = email;
        formData.message = message;
       
    }
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}

   