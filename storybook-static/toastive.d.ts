import { ToastiveProp, ToastiveProps } from './toastive.types';
export default class MmToastive extends HTMLElement {
    #private;
    autoClose: boolean;
    closeButton: boolean;
    draggable: boolean;
    duration: number;
    icon: boolean;
    title: string;
    message: string;
    position: string;
    variant: string;
    static get observedAttributes(): ToastiveProp[];
    get button(): HTMLElement | null | undefined;
    get template(): string;
    set options(props: ToastiveProps);
    constructor(props?: ToastiveProps);
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Close the toast
     * @returns {void}
     * @example
     * toast.close()
     */
    close(): void;
    /**
     * Update the toast
     * @param {ToastiveProps} props - Toastive properties
     * @returns {void}
     * @example
     * toast.update({
     *  title: 'New Title',
     * message: 'New Message',
     * variant: ToastiveVariant.Error,
     * autoClose: false,
     * closeButton: true
     * })
     */
    update(props?: Omit<ToastiveProps, ToastiveProp.Position>): void;
}
