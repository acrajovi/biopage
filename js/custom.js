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


// features tab
document.addEventListener('DOMContentLoaded', function() {
                const tabs = document.querySelectorAll('.feature-tabs .tab-item');
                const panels = document.querySelectorAll('.feature-content .content-panel');
                tabs.forEach(tab => {
                    tab.addEventListener('click', function() {
                        tabs.forEach(t => t.classList.remove('active'));
                        panels.forEach(p => p.classList.remove('active'));
                        tab.classList.add('active');
                        const panelId = tab.getAttribute('data-tab');
                        panels.forEach(p => {
                            if(p.id === panelId) p.classList.add('active');
                        });
                    });
                });
});

// Scroll
window.addEventListener('scroll', function() {
  const btn = document.getElementById('scrollTopBtn');
  if(window.scrollY > 200) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});
document.getElementById('scrollTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menú responsive
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});