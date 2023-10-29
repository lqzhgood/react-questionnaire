import React, { useState } from 'react';
import {
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Item({ id, title }: { id: string; title: string }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        border: '1px solid #ccc',
        margin: '10px 0',
        background: '#f1f1f1',
    };
    return (
        <p ref={setNodeRef} style={style} {...attributes} {...listeners} id={id}>
            Item {id}- ${title}
        </p>
    );
}

type ComponentType = {
    fe_id: string;
    title: string;
};

function DndSortable() {
    const [items, setItems] = useState<ComponentType[]>([
        { fe_id: 'c1', title: '组件1' },
        { fe_id: 'c2', title: '组件2' },
        { fe_id: 'c3', title: '组件3' },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;

        if (active.id !== over.id) {
            setItems(items => {
                const oldIndex = items.findIndex(c => c.fe_id === active.id);
                const newIndex = items.findIndex(c => c.fe_id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items.map(c => ({ ...c, id: c.fe_id }))} strategy={verticalListSortingStrategy}>
                {items.map(c => (
                    <Item key={c.fe_id} id={c.fe_id} {...c} />
                ))}
            </SortableContext>
        </DndContext>
    );
}

export default DndSortable;
