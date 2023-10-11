import { action, computed, makeObservable, observable } from 'mobx';
import { nanoid } from 'nanoid';

type TodoItem = {
    id: string;
    title: string;
    completed: boolean;
};

export class ObservableTodoStore {
    id = '';
    title = '';
    completed = false;

    constructor(title: string) {
        makeObservable(this, {
            id: observable,
            title: observable,
            completed: observable,
            update: action,
        });

        this.id = nanoid(5);
        this.title = title;
    }

    update(opt: Partial<TodoItem>) {
        Object.assign(this, opt);
    }
}

export class ObservableTodoListStore {
    list: ObservableTodoStore[] = [new ObservableTodoStore('吃饭'), new ObservableTodoStore('睡觉')];

    constructor() {
        makeObservable(this, {
            list: observable,
            completedTodosCount: computed,
            add: action,
            del: action,
        });
    }

    get completedTodosCount() {
        return this.list.filter(t => t.completed).length;
    }

    add(title: string) {
        const todo = new ObservableTodoStore(title);
        this.list.push(todo);
    }

    del(id: string) {
        this.list = this.list.filter(t => t.id !== id);
    }
}

export default new ObservableTodoListStore();
