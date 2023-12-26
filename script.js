function addItem() {
    var inputElement = document.getElementById("itemInput");
    var itemListElement = document.getElementById("itemList");
  
    if (inputElement.value.trim() === "") {
      alert("Please enter a valid item");
      return;
    }
  
    var li = document.createElement("li");
    li.innerHTML = `
      <span>${inputElement.value}</span>
      <button onclick="removeItem(this)">Remove</button>
    `;
  
    itemListElement.appendChild(li);
    inputElement.value = "";
  }
  
  function removeItem(button) {
    var li = button.parentElement;
    li.parentElement.removeChild(li);
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem();
    }
  }
  