import React, { useState } from 'react';
import { useTranslation as useI18n } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const ToggleLanguage = () => {
  const { i18n } = useI18n();
  const [defaultLng] = i18n.languages || ['es'];
  const [language, setLanguage] = useState(defaultLng);

  const handleChange = (_, newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <ToggleButtonGroup value={language} onChange={handleChange} exclusive>
      <ToggleButton value="en">En</ToggleButton>
      <ToggleButton value="es">Es</ToggleButton>
    </ToggleButtonGroup>
  );
};

ToggleLanguage.displayName = 'ToggleLanguage';

export default ToggleLanguage;
