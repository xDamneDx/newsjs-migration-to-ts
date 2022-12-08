export type Callback<T> = (data: T) => void;

export type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
    currentTarget: T;
};
