import { ComponentInfoType } from '.';

export function getNextSelectedId(fe_id: string, componentList: ComponentInfoType[]) {
    const noHiddenList = componentList.filter(c => !c.isHidden);
    const index = noHiddenList.findIndex(c => c.fe_id === fe_id);

    if (index === -1) return '';

    let newSelectedId = '';
    const len = noHiddenList.length;

    if (len <= 1) {
        newSelectedId = '';
    } else {
        if (index === len - 1) {
            newSelectedId = noHiddenList[index - 1].fe_id;
        } else {
            newSelectedId = noHiddenList[index + 1].fe_id;
        }
    }

    return newSelectedId;
}
