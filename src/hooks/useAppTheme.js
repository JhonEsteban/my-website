import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setAppTheme from '../redux/theme/actions';

const useAppTheme = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const handleToggleTheme = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    dispatch(setAppTheme(!darkMode));
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode')) {
      const state = JSON.parse(localStorage.getItem('darkMode'));
      dispatch(setAppTheme(state));
    }
  }, [dispatch]);

  return {
    handleToggleTheme,
  };
};

export default useAppTheme;
