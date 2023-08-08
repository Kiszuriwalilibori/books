import { useDispatch } from 'react-redux';

import { AppDispatch } from '../components/AppProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
