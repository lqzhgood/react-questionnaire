import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import {
    copyComponent,
    pasteCopiedComponent,
    removeSelectedComponent,
    moveSelectedComponent,
} from '@/store/componentsReducer';

function isActiveElementValid() {
    const activeElm = document.activeElement;
    if (activeElm === document.body) return true;
    // dnd-kit
    if (activeElm?.matches('div[role="button"]')) return true;

    return false;
}

function useBindCanvasKeyPress() {
    const dispatch = useDispatch();

    useKeyPress(['backspace', 'delete'], () => {
        if (!isActiveElementValid()) return;
        dispatch(removeSelectedComponent());
    });

    useKeyPress(['ctrl.c', 'meta.c'], () => {
        if (!isActiveElementValid()) return;
        dispatch(copyComponent());
    });

    useKeyPress(['ctrl.v', 'meta.v'], () => {
        if (!isActiveElementValid()) return;
        dispatch(pasteCopiedComponent());
    });

    useKeyPress(['uparrow'], () => {
        if (!isActiveElementValid()) return;
        dispatch(moveSelectedComponent('up'));
    });

    useKeyPress(['downarrow'], () => {
        if (!isActiveElementValid()) return;
        dispatch(moveSelectedComponent('down'));
    });
}

export default useBindCanvasKeyPress;
