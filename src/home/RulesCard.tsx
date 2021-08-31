import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import background from '../card-bg.svg';

function RulesCard() {
  const { t } = useTranslation('home');

  return(
    <div style={{ backgroundImage: `url(${ background })` }}>
      
    </div>
  );
}

export default RulesCard;
