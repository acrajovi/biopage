import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('comments', formData.comments);
    formPayload.append('_captcha', 'false');
    formPayload.append('_template', 'table');
    formPayload.append('_subject', 'Nuevo contacto desde BIO Soluciones Tecnológicas');

    try {
      const response = await fetch('https://formsubmit.co/ajax/acrajovi@gmail.com', {
        method: 'POST',
        body: formPayload
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', comments: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact py-24 px-6 md:px-12 relative" id="contact">
      <div className="container max-w-7xl mx-auto">
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <span className="section-tag inline-block py-1.5 px-4 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider mb-4">
            {t('contact_tag')}
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight">
            {t('contact_title')}
          </h2>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Column */}
          <div className="contact-info flex flex-col gap-6 w-full">
            {/* Email Card */}
            <a href="mailto:jacosta@bio.com.py" className="contact-card-link no-underline text-inherit block">
              <div className="contact-card flex items-center gap-5 p-5 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:translate-x-2 hover:border-primary transition-all duration-300">
                <div className="contact-icon w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white text-lg flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark dark:text-white mb-0.5">Email</h4>
                  <p className="text-sm text-gray/80 dark:text-gray/90 m-0">jacosta@bio.com.py</p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:+595986355113" className="contact-card-link no-underline text-inherit block">
              <div className="contact-card flex items-center gap-5 p-5 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:translate-x-2 hover:border-primary transition-all duration-300">
                <div className="contact-icon w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white text-lg flex-shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark dark:text-white mb-0.5">{t('contact_phone')}</h4>
                  <p className="text-sm text-gray/80 dark:text-gray/90 m-0">+595 986 355113</p>
                </div>
              </div>
            </a>

            {/* WA Card */}
            <a href="https://wa.me/595986355113" target="_blank" rel="noreferrer" className="contact-card-link no-underline text-inherit block">
              <div className="contact-card flex items-center gap-5 p-5 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:translate-x-2 hover:border-primary transition-all duration-300">
                <div className="contact-icon w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 text-white text-lg flex-shrink-0">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark dark:text-white mb-0.5">WhatsApp</h4>
                  <p className="text-sm text-gray/80 dark:text-gray/90 m-0">+595 986 355113</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-card flex items-center gap-5 p-5 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm">
              <div className="contact-icon w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white text-lg flex-shrink-0">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="text-sm font-bold text-dark dark:text-white mb-0.5">{t('contact_loc')}</h4>
                <p className="text-sm text-gray/80 dark:text-gray/90 m-0">Capiatá, Paraguay</p>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map rounded-2xl overflow-hidden shadow-md border border-gray-200/50 dark:border-gray-700/50 w-full h-[200px]">
              <iframe
                title="BIO Soluciones Tecnológicas Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.106071851336!2d-57.41960442461258!3d-25.367761277601574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945db27000000001%3A0xee5ef0539cfe3b6d!2sBIO%20Soluciones%20Tecnol%C3%B3gicas!5e0!3m2!1ses-419!2spy!4v1755825993662!5m2!1ses-419!2spy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper w-full p-8 md:p-10 bg-white dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-sm">
            <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6">
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-dark-medium dark:text-gray/90">{t('contact_form_name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre" 
                  className="w-full py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent text-dark dark:text-white focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-dark-medium dark:text-gray/90">{t('contact_form_email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com" 
                  className="w-full py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent text-dark dark:text-white focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="comments" className="text-sm font-semibold text-dark-medium dark:text-gray/90">{t('contact_form_msg')}</label>
                <textarea 
                  id="comments" 
                  name="comments" 
                  required
                  rows={5}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?" 
                  className="w-full py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent text-dark dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'loading' && (
                <div className="text-center text-sm font-semibold text-gray/80 animate-pulse">
                  Enviando mensaje...
                </div>
              )}
              {status === 'success' && (
                <div className="p-3 text-center text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 text-center text-sm font-semibold bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl">
                  Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn btn-primary w-full py-4 rounded-2xl font-bold bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer text-center border-none"
              >
                {t('contact_form_btn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
