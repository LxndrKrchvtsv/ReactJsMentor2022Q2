import { useDispatch } from 'react-redux';

import { AddDispatch } from '../store/store';

export const useAppDispatch: () => AddDispatch = useDispatch;
