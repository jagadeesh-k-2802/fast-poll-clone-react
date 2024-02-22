import { useState } from 'react';
import Pro from './Pro';

const ProContainer = () => {
  const [planOption, setPlanOption] = useState('Pay Monthly');
  return <Pro planOption={planOption} setPlanOption={setPlanOption} />;
};

export default ProContainer;
