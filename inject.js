(function() {

    if (!document.getElementById("blank_css")) {
        var blank_css = document.createElement("div");
        blank_css.id = "blank_css";
        document.body.appendChild(blank_css);
        document.getElementById("blank_css").innerHTML = "<style>body a[target=\"_blank\"]{border: 3px double darkviolet !important;}</style>";
    } else {
        var elem = document.getElementById("blank_css");
        elem.remove();
    }
    
})();