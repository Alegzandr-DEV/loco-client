import { useTranslation } from 'react-i18next';
import background from '../../assets/card-bg.svg';

const RulesCard = () => {
  const { t } = useTranslation('home');

  return(
    <div style={{ backgroundImage: `url(${ background })` }}>
      
    </div>
  );
};

export default RulesCard;
