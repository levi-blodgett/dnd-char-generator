function loadJsScript(filename){
    if (document.body.contains(document.getElementById("logical"))) {
        document.getElementById("logical").remove();
    } else if (document.body.contains(document.getElementById("random_versionactiveScript"))) {
        document.getElementById("random_versionactiveScript").remove();
    } else if (document.body.contains(document.getElementById("logical_versionactiveScript"))) {
        document.getElementById("logical_versionactiveScript").remove();
    }
    let fileref = document.createElement('script')
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id",`${filename}activeScript`);
    fileref.setAttribute("src", `build/${filename}.js`);
    document.getElementById("scripts").appendChild(fileref);
}

function switchScripts() {
    if (document.getElementById("top_button").innerHTML === "Switch to Random Version") {
      document.getElementById("top_button").innerHTML = "Switch to Logical Version";
    } else {
      document.getElementById("top_button").innerHTML = "Switch to Random Version";
    }
    if (document.body.contains(document.getElementById("logical_versionactiveScript")) || document.body.contains(document.getElementById("logical"))) {
        loadJsScript("random_version") // dynamically load and add this .js file
    } else {
        loadJsScript("logical_version") // dynamically load and add this .js file
    }
}