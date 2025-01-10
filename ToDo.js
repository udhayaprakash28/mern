var ListOfData = []; // Array to store the list
var input = document.getElementById("input"); // Input field
var todo = document.getElementById("todo"); // UL element

// Attach the click function to the button
document.getElementById("button").onclick = click;

// Insert data into the array
function click() {
    if (input.value.trim() !== "") {
        ListOfData.push(input.value.trim());
        console.log(ListOfData);
        input.value = ""; // Clear input field
        showList(); // Update the list
    }
}

// Display the list
function showList() {
    todo.innerHTML = ""; // Clear existing items
    ListOfData.forEach(function (n, i) {
        todo.innerHTML += `<li>${n} 
            <a onclick='edit(${i})'>edit</a> | 
            <a onclick='deleteItem(${i})'>&times;</a>
        </li>`;
    });
}

// Edit an item in the list
function edit(i) {
    var newVal = prompt("Please enter the new value:", ListOfData[i]);
    if (newVal && newVal.trim() !== "") {
        ListOfData[i] = newVal.trim();
        showList(); // Update the list
    }
}

// Delete an item from the list
function deleteItem(i) {
    ListOfData.splice(i, 1);
    showList(); // Update the list
}
