(function() {

    if (!document.getElementById("blocking_css")) {
        var blocking_css = document.createElement("div");
        blocking_css.id = "blocking_css";
        document.body.appendChild(blocking_css);
        document.getElementById("blocking_css").innerHTML = "<style>body a[target=\"_blank\"]{border: 0px solid transparent;}</style>";
    } else {
        var elem = document.getElementById("blocking_css");
        elem.remove();
    }
    
})();