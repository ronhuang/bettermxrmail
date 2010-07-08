(function() {
  chrome.extension.sendRequest({variable: "image"}, function(response) {
    if (!response.answer || !window.parent || !window.parent.parent) return;

    var cf = window.parent.parent.document.getElementById("canvas_frame");
    if (!cf) return;

    var cfd = cf.contentDocument;
    if (!cfd) return;

    var logo = cfd.getElementById(":rm");
    if (!logo) return;

    logo.style.setProperty("background-image","url(" + response.answer + ")", "important");
  });
})();
