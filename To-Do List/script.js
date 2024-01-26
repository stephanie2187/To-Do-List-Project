const items = [""];

function confirmItem() {
    
    if (document.getElementById("addItem").value === "") {
        return;
    } else {
        items.push(document.getElementById("addItem").value);

        var ul = document.getElementById("1");
        var li = document.createElement("li");

        var button = document.createElement("button");
        button.textContent = " X ";
        button.id = "deleteItem";
        button.classList.add("deleteButton");
        button.addEventListener("click", function() {
            ul.removeChild(li);
        });

        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");

        var taskSpan = document.createElement("span");
        taskSpan.innerHTML = items[items.length-1];

        check.addEventListener("change", function() {
            taskSpan.classList.toggle("strikethrough");
        });

        li.appendChild(check);
        li.appendChild(taskSpan);
        li.appendChild(button);
    
        ul.appendChild(li);
        document.getElementById("addItem").value = "";
    }
    
}


function clearList() {
    document.getElementById("1").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addItem").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            confirmItem();
        }
    });
});
