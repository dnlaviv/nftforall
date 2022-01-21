import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { set, ThemeMode } from '../theme.slice';

export const useThemeToggle = () => {
  const dispatch: AppDispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme') as ThemeMode | null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode && [ThemeMode.LIGHT, ThemeMode.DARK].includes(savedMode)) {
      console.log('setting theme to saved mode: ', savedMode);
      dispatch(set(savedMode));
    } else if (prefersDark) {
      dispatch(set(ThemeMode.DARK));
    }
  }, [dispatch]);

  const toggleMode = () => {
    const newMode = mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;
    localStorage.setItem('theme', newMode);
    dispatch(set(newMode));
  };

  return {
    toggleMode,
    mode,
  };
};
