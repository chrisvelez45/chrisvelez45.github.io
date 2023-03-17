const dateOfBirthInput = document.getElementById("dateofbirth");
const ageInput = document.getElementById("age");

dateOfBirthInput.addEventListener("change", () => {
  const dateOfBirth = new Date(dateOfBirthInput.value);
  const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  ageInput.value = age;
});
