import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement, reset } from './actions';
import { useActions } from './use-action';

export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, reset });

  return useMemo(() => {
    return { count, ...actions };
  }, [count, actions]);
};
