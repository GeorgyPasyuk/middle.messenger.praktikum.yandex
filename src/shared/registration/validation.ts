export const mailValidation = /@[\w\d]+(\.[\w\d]+)*$/;
export const loginValidation = /^(?!^[0-9]*$)[\w-]{3,20}$/;
export const firstNameValidation =
  /^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/;
export const secondNameValidation =
  /^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/;
export const phoneValidation = /^\+?\d{10,15}$/;
export const passwordValidation = /^(?=.*\d)(?=.*[A-Z])[\w\d]{8,40}$/;
