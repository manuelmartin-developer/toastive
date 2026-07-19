import { ToastiveAction, ToastivePosition, ToastiveProp, ToastiveProps, ToastiveTheme, ToastiveVariant } from './toastive.types.js';
export default class MmToastive extends HTMLElement {
    #private;
    action?: ToastiveAction;
    autoClose: boolean;
    closeButton: boolean;
    draggable: boolean;
    duration: number;
    title: string;
    message: string;
    position: ToastivePosition;
    variant: ToastiveVariant;
    theme: ToastiveTheme;
    pauseOnHover: boolean;
    customIcon: string;
    static get observedAttributes(): ToastiveProp[];
    get button(): HTMLElement | null | undefined;
    get actionButton(): HTMLElement | null | undefined;
    get template(): string;
    set options(props: Partial<ToastiveProps> & {
        action?: ToastiveAction;
    });
    constructor(props?: ToastiveProps);
    connectedCallback(): void;
    disconnectedCallback(): void;
    close(): void;
    update(props?: Omit<ToastiveProps, ToastiveProp.Position>): void;
}
