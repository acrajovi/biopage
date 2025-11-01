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

// Unified menu and dropdown functionality
document.addEventListener('click', e => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const dropdown = document.querySelector('[data-dropdown]');

    const isMenuToggleButton = e.target.matches('#menuToggle') || e.target.closest('#menuToggle');
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    const isDropdownLink = e.target.closest('.dropdown-menu a');

    // Handle hamburger menu toggle
    if (isMenuToggleButton) {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Close dropdown if hamburger menu is opened
        if (dropdown && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
        return; // Prevent further processing for menu toggle
    }

    // Handle dropdown toggle
    if (isDropdownButton) {
        dropdown.classList.toggle('active');
        return; // Prevent further processing for dropdown toggle
    }

    // Close both menus if click is outside of them
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && (!dropdown || !dropdown.contains(e.target))) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    }

    // Close both menus if a dropdown link is clicked
    if (isDropdownLink) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    }
});

window.addEventListener('keydown', e => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const dropdown = document.querySelector('[data-dropdown]');

    if (e.key === 'Escape') {
        // Close hamburger menu
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        // Close dropdown
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    }
});

// Close menus when a navigation link is clicked (excluding dropdown button)
document.querySelectorAll('.nav-links a:not([data-dropdown-button])').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menuToggle').classList.remove('active');
        document.getElementById('navLinks').classList.remove('active');
        const dropdown = document.querySelector('[data-dropdown]');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
    });
});