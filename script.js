/*const cvvElement = document.getElementById("cvv");
const addButton = document.querySelector(".button-plus");
const subButton = document.querySelector(".button-minus");

let cvvNumber = localStorage.getItem("cvvNumber") || parseInt(cvvElement.textContent);

cvvElement.textContent = cvvNumber.toString();

addButton.addEventListener("click", function() {
  cvvNumber++;
  cvvElement.textContent = cvvNumber.toString();
  localStorage.setItem("cvvNumber", cvvNumber.toString());
});

subButton.addEventListener("click", function() {
  cvvNumber--;
  cvvElement.textContent = cvvNumber.toString();
  localStorage.setItem("cvvNumber", cvvNumber.toString());
});*/

/*const cvvElement = document.getElementById("cvv");
const addButton = document.querySelector(".button-plus");
const subButton = document.querySelector(".button-minus");

let cvvNumber = localStorage.getItem("cvvNumber") || parseInt(cvvElement.textContent);

cvvElement.textContent = cvvNumber.toString();

addButton.addEventListener("click", function() {
  const reason = prompt("Why did you click the + button?");
  cvvNumber++;
  cvvElement.textContent = cvvNumber.toString();
  localStorage.setItem("cvvNumber", cvvNumber.toString());
  sendReason(reason, "+");
});

subButton.addEventListener("click", function() {
  const reason = prompt("Why did you click the - button?");
  cvvNumber--;
  cvvElement.textContent = cvvNumber.toString();
  localStorage.setItem("cvvNumber", cvvNumber.toString());
  sendReason(reason, "-");
});

function sendReason(reason, button) {
  fetch("/log-click", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      reason: reason,
      button: button
    })
  })
  .then(response => {
    console.log("Click logged successfully");
  })
  .catch(error => {
    console.error("Error logging click:", error);
  });
}*/

/*const cvvElement = document.getElementById("cvv");
const addButton = document.querySelector(".button-plus");
const subButton = document.querySelector(".button-minus");
const reasonsList = document.getElementById("reasons-list");

let cvvNumber = localStorage.getItem("cvvNumber") || parseInt(cvvElement.textContent);
let reasons = JSON.parse(localStorage.getItem("reasons")) || [];

cvvElement.textContent = cvvNumber.toString();

addButton.addEventListener("click", function() {
  const reason = prompt("Enter the reason for clicking +:");
  cvvNumber++;
  cvvElement.textContent = cvvNumber.toString();
  reasons.push({ button: "+", reason });
  localStorage.setItem("cvvNumber", cvvNumber.toString());
  localStorage.setItem("reasons", JSON.stringify(reasons));
  displayReasons();
});

subButton.addEventListener("click", function() {
  const reason = prompt("Enter the reason for clicking -:");
  cvvNumber--;
  cvvElement.textContent = cvvNumber.toString();
  reasons.push({ button: "-", reason });
  localStorage.setItem("cvvNumber", cvvNumber.toString());
  localStorage.setItem("reasons", JSON.stringify(reasons));
  displayReasons();
});

function displayReasons() {
  reasonsList.innerHTML = "";
  reasons.forEach((reason, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. Button ${reason.button}: ${reason.reason}`;
    reasonsList.appendChild(li);
  });
}*/
/*const cvvElement = document.getElementById("cvv");
const addButton = document.querySelector(".button-plus");
const subButton = document.querySelector(".button-minus");
const reasonButton = document.querySelector(".show-reason");

let cvvNumber = parseInt(localStorage.getItem("cvvNumber")) || parseInt(cvvElement.textContent);
let reason = localStorage.getItem("reason") || "No reason provided.";

cvvElement.textContent = cvvNumber.toString();

addButton.addEventListener("click", function() {
  let userReason = prompt("Please enter a reason for clicking the + button:");
  if (userReason) {
    cvvNumber++;
    cvvElement.textContent = cvvNumber.toString();
    reason = userReason;
    localStorage.setItem("cvvNumber", cvvNumber.toString());
    localStorage.setItem("reason", reason);
  }
});

subButton.addEventListener("click", function() {
  let userReason = prompt("Please enter a reason for clicking the - button:");
  if (userReason) {
    cvvNumber--;
    cvvElement.textContent = cvvNumber.toString();
    reason = userReason;
    localStorage.setItem("cvvNumber", cvvNumber.toString());
    localStorage.setItem("reason", reason);
  }
});

reasonButton.addEventListener("click", function() {
  alert(reason);
});*/
const cvvElement = document.getElementById("cvv");
const addButton = document.querySelector(".button-plus");
const subButton = document.querySelector(".button-minus");
const reasonsButton = document.querySelector(".show-reasons");
const reasonsList = document.querySelector(".reasons-list");

let cvvNumber = localStorage.getItem("cvvNumber") || parseInt(cvvElement.textContent);
let reasons = JSON.parse(localStorage.getItem("reasons")) || [];

cvvElement.textContent = cvvNumber.toString();

addButton.addEventListener("click", function() {
  if (cvvNumber < 10) {
    const reason = prompt("Lý do vì sao được cộng điểm?");
    if (reason) {
      cvvNumber++;
      cvvElement.textContent = cvvNumber.toString();
      reasons.push({ cvv: cvvNumber, reason: reason, type: "plus" });
      localStorage.setItem("cvvNumber", cvvNumber.toString());
      localStorage.setItem("reasons", JSON.stringify(reasons));
    }
  } else {
    alert("Điểm đã đạt giới hạn 10");
  }
});

subButton.addEventListener("click", function() {
  if (cvvNumber > -10) {
    const reason = prompt("Lý do vì sao bị trừ điểm?");
    if (reason) {
      cvvNumber--;
      cvvElement.textContent = cvvNumber.toString();
      reasons.push({ cvv: cvvNumber, reason: reason, type: "minus" });
      localStorage.setItem("cvvNumber", cvvNumber.toString());
      localStorage.setItem("reasons", JSON.stringify(reasons));
    }
  } else {
    alert("Điểm đã đạt giới hạn -10");
  }
});

reasonsButton.addEventListener("click", function() {
  reasonsList.innerHTML = "";
  reasons.forEach(function(item) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const type = item.type === "plus" ? "+" : "-";
    span.textContent = `${type} Điểm ${item.cvv}: ${item.reason} `;
    li.appendChild(span);

    const clearButton = document.createElement("button");
    clearButton.textContent = "x";
    clearButton.addEventListener("click", function() {
      const index = reasons.indexOf(item);
      reasons.splice(index, 1);
      localStorage.setItem("reasons", JSON.stringify(reasons));
      reasonsButton.click();
    });
    li.appendChild(clearButton);

    reasonsList.appendChild(li);
  });
});












