var listOfguests = [];
function Addguest() {
    listOfguests.push(document.getElementById("guest").value);
    document.getElementById("guest").value = "";
    Viewguest();
    sortguest();
}

function sortguest() {
    listOfguests.sort();
    Viewguest();
}

function Viewguest() {
    var createHTML = "";
    createHTML = createHTML + '<ol>';
    for (var i = 0; i < listOfguests.length; i++) {
        createHTML = createHTML + '<li>' + listOfguests[i] + '</li>';
    }
    createHTML = createHTML + '</ol>';
    document.getElementById("showguest").innerHTML = createHTML;
}
function SEARCH() {
    var searchELEMENT = document.getElementById("searchGuest").value;
    var count = 0;
    for (var i = 0; i < listOfguests.length; i++) {
        if (searchELEMENT == listOfguests[i]) {
            count = count + 1;
        }
    }
    document.getElementById("result").innerHTML = "Element found " + searchELEMENT + " " + count + " times";
}
