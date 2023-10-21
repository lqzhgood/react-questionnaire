import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import {
    copyComponent,
    pasteCopiedComponent,
    removeSelectedComponent,
    moveSelectedComponent,
} from '@/store/componentsReducer';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

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

    useKeyPress(
        ['ctrl.z', 'meta.z'],
        () => {
            if (!isActiveElementValid()) return;
            dispatch(UndoActionCreators.undo());
        },
        {
            exactMatch: true,
        },
    );

    useKeyPress(
        ['ctrl.y', 'meta.y'],
        () => {
            if (!isActiveElementValid()) return;
            dispatch(UndoActionCreators.redo());
        },
        {
            exactMatch: true,
        },
    );
}

export default useBindCanvasKeyPress;
