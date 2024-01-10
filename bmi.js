const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
