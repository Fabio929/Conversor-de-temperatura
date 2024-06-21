let inputDisplay = document.getElementById("inputD");
let resultInput = document.getElementById("result");
const temperatureConverter = document.querySelector(
  "select[name='temperatureConverter']"
);

const celsius = document
  .getElementById("celsiusDegrees")
  .addEventListener("click", () => {
    let c = parseFloat(inputDisplay.value);
    inputDisplay.value = `${c} °C `;
    let f = parseFloat(c * 1.8 + 32).toFixed(1);
    let k = parseFloat(c + 273).toFixed(1);

    resultInput.value = ` ${k}°K       ${f}°F `;
  });
const fahrenheit = document
  .getElementById("fahrenheitDegrees")
  .addEventListener("click", () => {
    let f = parseFloat(inputDisplay.value);
    inputDisplay.value = `${f} °F`;
    let c = parseFloat((f - 32) / 1.8).toFixed(1);

    let k = parseFloat(((f - 32) * 5) / 9 + 273).toFixed(1);

    resultInput.value = `${c}°C        ${k}°K`;
  });
const kelvin = document
  .getElementById("kelvinDegrees")
  .addEventListener("click", () => {
    let k = parseFloat(inputDisplay.value);
    inputDisplay.value = `${k} °K`;
    let c = parseFloat(k - 273).toFixed(1);
    let f = parseFloat((k - 273) * 1.8 + 32).toFixed(1);

    resultInput.value = `${c}°C         ${f}°F`;
  });

const allowedCharacters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  ".",
];

inputDisplay.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  if (allowedCharacters.includes(ev.key)) {
    inputDisplay.value += ev.key;
    return;
  } else if (ev.key === "Backspace") {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
    return;
  }
});

document.querySelectorAll("#btn").forEach((changeBtn) => {
  changeBtn.addEventListener("click", () => {
    const btnValue = changeBtn.dataset.value;
    inputDisplay.value += btnValue;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  inputDisplay.value = inputDisplay.value.slice(-1, -1);
  resultInput.value = resultInput.value.slice(-1, -1);
});
