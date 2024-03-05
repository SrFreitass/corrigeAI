import { themes } from '@/styles/theme';
import { InfinitySpin } from 'react-loader-spinner';

export function Loader() {
  return <InfinitySpin color={themes.colors.primary} />;
}
