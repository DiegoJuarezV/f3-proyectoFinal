export const validarNombre = (name) => {
  const nameTrim = name.trim();
  if (nameTrim.length > 5) {
    return true;
  } else {
    return false;
  }
}

export const validarEmail = (email) => {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailTrim = email.trim();
  if (emailTrim.length > 8 && regEx.test(emailTrim)) {
    return true;
  } else {
    return false;
  }
}