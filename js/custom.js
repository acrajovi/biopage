// Archivo principal de scripts para BIO Soluciones Tecnológicas.
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contactForm');
	const msgDiv = document.getElementById('contactMsg');

	if(form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const formData = new FormData(form);
			fetch('https://api.bio.com.py/contact/contact.php', {
				method: 'POST',
				body: formData
			})
			.then(res => res.text())
			.then(data => {
				msgDiv.innerHTML = data;
				if (data.includes('success_page')) {
					form.reset();
				}
			})
			.catch(() => {
				msgDiv.innerHTML = '<div class="error_message">Error al enviar el mensaje. Intenta de nuevo.</div>';
			});
		});
	}
});
// ...aquí van todos los scripts que estaban en templatemo-electric-xtra.js...
