const result = document.getElementById("result");

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    isPalindrome();
  }
});

function isPalindrome() {
  const textInput = document.getElementById("text-input");

  if (textInput.value) {
    result.classList.remove("error");

    const formattedText = [
      ...textInput.value.toLowerCase().replace(/[^A-Za-z0-9ñ]/g, ""),
    ];

    if (formattedText.join("") === formattedText.reverse().join("")) {
      result.textContent = `${textInput.value} is a palindrome`;
    } else {
      result.textContent = `${textInput.value} is not a palindrome`;
    }
  } else {
    result.textContent = "Please input a value";
    result.classList.add("error");
  }
}
