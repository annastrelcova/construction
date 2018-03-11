'use strict';

document.addEventListener('DOMContentLoaded', accordionPlugin);

function accordionPlugin() {
    var accordions = document.querySelectorAll('.accordion-header');

    for (var i = 0; i < accordions.length; i++) {
        console.log( accordions[i]);
        accordions[i].addEventListener('click', toggleAccordion);
    }
}

function toggleAccordion(e) {
    var parentClasses = e.target.parentElement.classList;
    var arrow = e.target.children[1].classList;

    if (parentClasses.contains('accordion-section--normal')) {
        parentClasses.remove('accordion-section--normal');
        parentClasses.add('accordion-section--expanded');
        arrow.remove('fa-plus');
        arrow.add('fa-minus');
    } else {
        parentClasses.remove('accordion-section--expanded');
        parentClasses.add('accordion-section--normal');
        arrow.remove('fa-minus');
        arrow.add('fa-plus');
    }
}
