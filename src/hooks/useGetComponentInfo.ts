import { ComponentStateType } from '@/store/componentsReducer';
import { StoreStateType } from '@/store/index';
import { useSelector } from 'react-redux';

function useGetComponentInfo() {
    const components = useSelector<StoreStateType, ComponentStateType>(state => state.components);

    const { componentList, selectedId } = components;

    const selectedComponent = componentList.find(c => c.fe_id === selectedId);

    return { componentList, selectedId, selectedComponent };
}

export default useGetComponentInfo;
