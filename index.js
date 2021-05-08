$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});	
// ScrollReveal().reveal('.title-1');
// ScrollReveal().reveal('.title-2', {
//   delay: 500
// });
// ScrollReveal().reveal('.main-img', {
//   delay: 600
// });
// ScrollReveal().reveal('.lightbox', {delay: 300});

window.sr = ScrollReveal();

// Customizing a reveal set
sr.reveal('.title-wrapper,.contact, .lightbox, .team', {
	duration:1000,
	delay: 300

});