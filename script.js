const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

checkBtn.addEventListener("click", function checkLuckyDate() {
    const userDob = dateOfBirth.value.replaceAll("-", "");
    const sum = calculateSum(userDob);
    if (luckyNumber.value && userDob) {
        compareInputs(sum, luckyNumber.value);
    } else {
        output.innerHTML = "Please fill both options"
    }

});

function calculateSum(userDob) {
    let sum = 0;
    for (let i = 0; i < userDob.length; i++) {
        sum = sum + Number(userDob.charAt(i));
    }
    return sum;
}

function compareInputs(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        output.innerHTML = "✨Your BirthDay is Lucky✨";
    } else {
        output.innerHTML = "😑Your Birthday is Unlucky😑";
    }
}