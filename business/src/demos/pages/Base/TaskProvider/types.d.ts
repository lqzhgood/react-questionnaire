export type task = {
    id: number;
    text: string;
    done: boolean;
};

export type action = { type: string } & Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
