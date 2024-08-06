function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
document.getElementById('breakfast-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#breakfast');
});

document.getElementById('lunch-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#lunch');
});
document.getElementById('hitea-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#hitea');
});
document.getElementById('dinner-link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToSection('#dinner');
});
function search_dish() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    let sections = document.querySelectorAll('section');
    let noResults = document.getElementById('no-results');
    let hasVisibleCards = false;
    
    for (let section of sections) {
        let sectionCards = section.getElementsByClassName('card');
        let sectionHeader = section.querySelector('h2');
        let sectionHasVisibleCards = false;

        for (let card of sectionCards) {
            if (card.innerHTML.toLowerCase().includes(input)) {
                card.style.display = "block";
                sectionHasVisibleCards = true;
                hasVisibleCards = true;
            } else {
                card.style.display = "none";
            }
        }
        sectionHeader.style.display = sectionHasVisibleCards ? "block" : "none";
    }
    noResults.style.display = hasVisibleCards ? "none" : "block";
}
