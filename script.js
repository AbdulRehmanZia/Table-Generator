let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let resultContainer = document.getElementById("resultContainer");
resultContainer.innerHTML = "";

function tableFunction() {
  let userInput = document.getElementById("userInput").value;

  console.log(userInput);

  numbers.forEach((data) => {
    let result = data * userInput;
    let output = `<ul>
<li>${userInput} * ${data} = ${result} </li>
</ul>`;

    resultContainer.innerHTML += output;
  });
}
