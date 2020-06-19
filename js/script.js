document.getElementById("scroll-content").addEventListener("scroll", function (event) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "Shopping Cart Item " + index++;
    document.getElementById("scroll-content").appendChild(newDiv);
});

var index = 0;

var checkForNewDiv = function () {
    var lastDiv = document.querySelector("#scroll-content > div:last-child");
    var maindiv = document.querySelector("#scroll-content");
    var lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
    var pageOffset = maindiv.offsetTop + maindiv.clientHeight;
    if (pageOffset > lastDivOffset - 10) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Shopping Cart " + index++;
        document.getElementById("scroll-content").appendChild(newDiv);
        checkForNewDiv();
    }
};

checkForNewDiv();
