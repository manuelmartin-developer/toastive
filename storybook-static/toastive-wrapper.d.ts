import { default as MmToastive } from './toastive.ts';
export declare class MmToastiveWrapper extends HTMLElement {
    #private;
    get template(): string;
    constructor();
    connectedCallback(): void;
    addToastive(toastive: MmToastive): void;
}
