import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('.delay__input');
const fulfilledRadio = document.querySelector(
  'input[type="radio"][value="fulfilled"]'
);
const rejectedRadio = document.querySelector(
  'input[type="radio"][value="rejected"]'
);
const createBtn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const delayInputNum = Number(delayInput.value);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilledRadio.checked) {
        resolve(delayInputNum);
      } else {
        reject(delayInputNum);
      }
    }, delayInputNum);
  });

  promise
    .then(delayInputNum => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delayInputNum}ms`,
        color: '#59a10d',
        position: 'topRight',
        timeout: 3000,
        maxWidth: '500px',
        titlesize: '16px',
        titleLineHeight: '150%',
        titleColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '150%',
        messageColor: '#fff',
      });
    })

    .catch(delayInputNum => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delayInputNum}ms`,
        color: '#ef4040',
        position: 'topRight',
        timeout: 3000,
        maxWidth: '500px',
        titlesize: '16px',
        titleLineHeight: '150%',
        titleColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '150%',
        messageColor: '#fff',
      });
    });
});
