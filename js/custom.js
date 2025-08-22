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
				body: formData,
				credentials: 'include' // 🔑 necesario porque PHP usa Allow-Credentials
			})
			.then(res => {
				if (!res.ok) throw new Error("Error HTTP " + res.status);
				return res.text();
			})
			.then(data => {
				msgDiv.innerHTML = data;
				if (data.includes('success_page')) {
					form.reset();
				}
			})
			.catch(err => {
				msgDiv.innerHTML = '<div class="error_message">Error de conexión: ' + err.message + '</div>';
			});
		});
	}
});
