// ageForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const day = parseInt(document.getElementById("day").value);
//   const month = parseInt(document.getElementById("month").value);
//   const year = parseInt(document.getElementById("year").value);

//   const paragraph = document.createElement('p');


//   const currentDate = new Date();
//   const userBirthDate = new Date(year, month - 1, day); // Month is 0-indexed

//   if (isNaN(userBirthDate.getTime())) {
//     showError("Invalid date format");
//     return;
//   }

//   if (userBirthDate > currentDate) {
//     showError("Birth date cannot be in the future");
//     return;
//   }

//   const { years, months, days } = calculateAge(currentDate, userBirthDate);
//   showResult(years, months, days);
// });

// function calculateAge(currentDate, birthDate) {
//   let ageInMilliseconds = currentDate - birthDate;
//   const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
//   const millisecondsInMonth = millisecondsInYear / 12;

//   const years = Math.floor(ageInMilliseconds / millisecondsInYear);
//   ageInMilliseconds -= years * millisecondsInYear;

//   const months = Math.floor(ageInMilliseconds / millisecondsInMonth);
//   ageInMilliseconds -= months * millisecondsInMonth;

//   const days = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

//   return { years, months, days };
// }

// function showError(message) {
//   result.textContent = message;
//   result.classList.add("error");
//   setTimeout(() => {
//     result.textContent = "";
//     result.classList.remove("error");
//   }, 3000);
// }

// function showResult(years, months, days) {
//   paragraph.textContent = `${years} years`;
//   paragraph.textContent = `${months} months`;
//   paragraph.textContent = `${days} days`;
// }

// for (let i = 0; i < 3; i++) {
//     result.append(paragraph);
// }

ageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const currentDate = new Date();
  const userBirthDate = new Date(year, month - 1, day);

  if (isNaN(userBirthDate.getTime())) {
    showError("Invalid date format");
    return;
  }

  if (userBirthDate > currentDate) {
    showError("Birth date cannot be in the future");
    return;
  }

  const { years, months, days } = calculateAge(currentDate, userBirthDate);
  showResult(years, months, days);
});

function calculateAge(currentDate, birthDate) {
  let ageInMilliseconds = currentDate - birthDate;
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const millisecondsInMonth = millisecondsInYear / 12;

  const years = Math.floor(ageInMilliseconds / millisecondsInYear);
  ageInMilliseconds -= years * millisecondsInYear;

  const months = Math.floor(ageInMilliseconds / millisecondsInMonth);
  ageInMilliseconds -= months * millisecondsInMonth;

  const days = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

  return { years, months, days };
}

function showError(message) {
  result.textContent = message;
  result.classList.add("error");
  setTimeout(() => {
    result.textContent = "";
    result.classList.remove("error");
  }, 3000);
}

function showResult(years, months, days) {
    result.innerHTML = '';
  
    const yearsParagraph = document.createElement('p');
    yearsParagraph.textContent = `${years} years`;
  
    const monthsParagraph = document.createElement('p');
    monthsParagraph.textContent = `${months} months`;
  
    const daysParagraph = document.createElement('p');
    daysParagraph.textContent = `${days} days`;

    result.appendChild(yearsParagraph);
    result.appendChild(monthsParagraph);
    result.appendChild(daysParagraph);
}
  

