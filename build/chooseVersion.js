// Tracks which version is currently active; avoids fragile DOM-ID string checks.
let _isLogical = true;

function loadJsScript(filename) {
  // Remove whichever version script is currently in the DOM.
  ["logical", "logical_versionactiveScript", "random_versionactiveScript"].forEach(
    (id) => { const el = document.getElementById(id); if (el) el.remove(); }
  );
  const fileref = document.createElement("script");
  fileref.setAttribute("type", "text/javascript");
  fileref.setAttribute("id", `${filename}activeScript`);
  fileref.setAttribute("src", `build/${filename}.js`);
  document.getElementById("scripts").appendChild(fileref);
}

function switchScripts() {
  _isLogical = !_isLogical;
  const button = document.getElementById("top_button");
  if (_isLogical) {
    button.innerHTML = "Switch to Random Version";
    loadJsScript("logical_version");
  } else {
    button.innerHTML = "Switch to Logical Version";
    loadJsScript("random_version");
  }
}
