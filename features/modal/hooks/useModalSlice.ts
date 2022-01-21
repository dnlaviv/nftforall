import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { Modal, set } from '../modal.slice';
import { useCallback, useMemo } from 'react';

export const useModalSlice = () => {
  const dispatch: AppDispatch = useDispatch();
  const modals = useSelector((state: RootState) => state.modal);

  const setModal = useCallback(
    (key: Modal, value: boolean) => {
      dispatch(set({ key, value }));
    },
    [dispatch],
  );

  // Returning a new version of the state
  return useMemo(
    () => ({
      modals,
      setModal,
    }),
    [modals, setModal],
  );
};
