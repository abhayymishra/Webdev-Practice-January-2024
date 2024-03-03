function toggleExpanded(element, show) {
  var target = document.getElementById(element.getAttribute("aria-controls"));

  if (target) {
    element.setAttribute("aria-expanded", show);
    target.setAttribute("aria-hidden", !show);
  }
}

function setupAccordian(accordianContainer) {
  function closeAllPanels() {
    var openPanels = accordianContainer.querySelectorAll(
      "[aria-expanded = true"
    );

    for (var i = 0, l = openPanels.length; i < l; i++) {
      toggleExpanded(openPanels[i], false);
    }
  }

  accordionContainer.addEventListener("click", function (event) {
    var target = event.target;

    if (target.closest) {
      target = target.closest('[class*="p-accordion__tab"]');
    }

    if (target) {
      var isTargetOpen = target.getAttribute("aria-expanded") === "true";
      closeAllPanels();

      toggleExpanded(target, !isTargetOpen);
    }
  });
}

var accordians = document.querySelectorAll('.p-accordian');

for(var i = 0 , l = accordians.length ; i < l ; i++) {
    setupAccordian(accordians[i]);
}
