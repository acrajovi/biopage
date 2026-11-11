import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationDict } from '../context/translations';
import { Reveal } from './Reveal';

interface FreeToolCardConfig {
  id: string;
  href: string;
  icon: string;
  accentBg: string;
  accentText: string;
  borderHover: string;
  btnGradient: string;
  titleKey: keyof TranslationDict;
  subtitleKey: keyof TranslationDict;
  descKey: keyof TranslationDict;
  featKeys: Array<keyof TranslationDict>;
}

const FREE_TOOLS: FreeToolCardConfig[] = [
  {
    id: 'ruc',
    href: 'https://datosruc.bio.com.py/',
    icon: 'fa-id-card',
    accentBg: 'bg-primary/10',
    accentText: 'text-primary dark:text-indigo-400',
    borderHover: 'hover:border-primary/45',
    btnGradient: 'bg-linear-to-r from-primary to-accent',
    titleKey: 'tools_ruc_title',
    subtitleKey: 'tools_ruc_subtitle',
    descKey: 'tools_ruc_desc',
    featKeys: ['tools_ruc_feat1', 'tools_ruc_feat2', 'tools_ruc_feat3'],
  },
  {
    id: 'btu',
    href: 'https://calcularbtu.bio.com.py/',
    icon: 'fa-snowflake',
    accentBg: 'bg-secondary/10',
    accentText: 'text-secondary dark:text-sky-400',
    borderHover: 'hover:border-secondary/45',
    btnGradient: 'bg-linear-to-r from-secondary to-primary',
    titleKey: 'tools_btu_title',
    subtitleKey: 'tools_btu_subtitle',
    descKey: 'tools_btu_desc',
    featKeys: ['tools_btu_feat1', 'tools_btu_feat2', 'tools_btu_feat3'],
  },
  {
    id: 'qr',
    href: 'https://qr.bio.com.py/',
    icon: 'fa-qrcode',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    borderHover: 'hover:border-emerald-500/45',
    btnGradient: 'bg-linear-to-r from-emerald-600 to-teal-500',
    titleKey: 'tools_qr_title',
    subtitleKey: 'tools_qr_subtitle',
    descKey: 'tools_qr_desc',
    featKeys: ['tools_qr_feat1', 'tools_qr_feat2', 'tools_qr_feat3'],
  },
];

export const FreeTools: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="free-tools py-24 px-6 md:px-12 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/35 border-b border-slate-200/50 dark:border-white/[0.06]"
      id="tools"
    >
      <div className="container max-w-7xl mx-auto relative z-10">
        <Reveal className="section-header text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-4 shadow-xs">
            <i className="fas fa-toolbox text-xs" />
            <span>{t('tools_tag')}</span>
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight mb-3 tracking-tight">
            {t('tools_title')}
          </h2>
          <p className="section-subtitle text-gray/85 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            {t('tools_subtitle')}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {FREE_TOOLS.map((tool, idx) => (
            <Reveal key={tool.id} delayMs={idx * 70}>
              <article
                className={`bio-card h-full rounded-2xl bg-white/85 dark:bg-slate-900/65 backdrop-blur-md border border-slate-200/75 dark:border-white/[0.08] shadow-sm hover:shadow-xl ${tool.borderHover} p-7 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${tool.accentBg} ${tool.accentText} flex items-center justify-center text-xl group-hover:scale-108 transition-transform duration-300`}
                    >
                      <i className={`fas ${tool.icon}`} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      <i className="fas fa-bolt text-[10px]" />
                      {t('tools_badge_free')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dark dark:text-white mb-1.5 tracking-tight">
                    {t(tool.titleKey)}
                  </h3>
                  <p className={`text-xs font-semibold ${tool.accentText} mb-3`}>
                    {t(tool.subtitleKey)}
                  </p>

                  <p className="text-gray/85 dark:text-slate-300 text-sm leading-relaxed mb-5">
                    {t(tool.descKey)}
                  </p>

                  <ul className="space-y-2.5 mb-7 text-xs sm:text-sm text-dark-medium dark:text-slate-300 list-none p-0 m-0">
                    {tool.featKeys.map((fk) => (
                      <li key={fk} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          <i className="fas fa-check" />
                        </span>
                        <span>{t(fk)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200/70 dark:border-white/[0.06]">
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl font-bold text-white ${tool.btnGradient} hover:opacity-95 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm no-underline`}
                  >
                    <span>{t('tools_btn_launch')}</span>
                    <i className="fas fa-arrow-up-right-from-square text-xs" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
