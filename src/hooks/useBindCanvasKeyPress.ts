import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import {
    copyComponent,
    pasteCopiedComponent,
    removeSelectedComponent,
    moveSelectedComponent,
} from '@/store/componentsReducer';

function isActiveElementValid() {
    return document.activeElement === document.body;
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
