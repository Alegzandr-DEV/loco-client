import { useTranslation } from 'react-i18next';

const Language = () => {
  // Translations
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  i18n.on('languageChanged', (lng) => { document.documentElement.setAttribute('lang', lng); })

  return(
    <div className="language">
      <button type="button" onClick={ () => changeLanguage('en') }>
        en
      </button>
      <button type="button" onClick={ () => changeLanguage('fr') }>
        fr
      </button>
    </div>
  );
};

export default Language;
