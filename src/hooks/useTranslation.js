import { useTranslation as useTrans } from 'react-i18next';

/** You can either pass in a namespace or an array of namespaces to load
 * E.g.: useTrans('common'); or useTrans(['page1', 'common']);
 */
export const useTranslation = ns => {
  const { t } = useTrans();
  return key => t(key);
};
