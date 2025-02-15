/**
 * Toastive Properties
 * @enum {string}
 * @readonly
 *
 * @property {string} AutoClose - Auto close the toast
 * @property {string} CloseButton - Show close button
 * @property {string} Draggable - Draggable the toast
 * @property {string} Duration - Duration of the toast
 * @property {string} Title - Title of the toast
 * @property {string} Message - Message of the toast
 * @property {string} Position - Position of the toast
 * @property {string} Variant - Variant of the toast
 */
export declare enum ToastiveProp {
    AutoClose = "autoClose",
    CloseButton = "closeButton",
    Draggable = "draggable",
    Duration = "duration",
    Title = "title",
    Message = "message",
    Position = "position",
    Variant = "variant"
}
/**
 * Toastive Variants
 * @enum {string}
 * @readonly
 *
 * @property {string} Error - Error variant
 * @property {string} Info - Info variant
 * @property {string} Default - Default variant
 * @property {string} Loading - Loading variant
 * @property {string} Success - Success variant
 * @property {string} Warning - Warning variant
 */
export declare enum ToastiveVariant {
    Error = "error",
    Info = "info",
    Default = "default",
    Loading = "loading",
    Success = "success",
    Warning = "warning"
}
/**
 * Toastive Position
 * @enum {string}
 * @readonly
 *
 * @property {string} TopRight - Top right position
 * @property {string} TopLeft - Top left position
 * @property {string} BottomRight - Bottom right position
 * @property {string} BottomLeft - Bottom left position
 */
export declare enum ToastivePosition {
    TopRight = "top-right",
    TopLeft = "top-left",
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left"
}
/**
 * Toastive Properties
 * @interface ToastiveProps
 *
 * @property {boolean} [autoClose] - Auto close the toast
 * @property {boolean} [closeButton] - Show close button
 * @property {boolean} [draggable] - Draggable the toast
 * @property {number} [duration] - Duration of the toast
 * @property {string} [title] - Title of the toast
 * @property {string} [message] - Message of the toast
 * @property {ToastivePosition} [position] - Position of the toast
 * @property {ToastiveVariant} [variant] - Variant of the toast
 */
export interface ToastiveProps {
    [ToastiveProp.AutoClose]?: boolean;
    [ToastiveProp.CloseButton]?: boolean;
    [ToastiveProp.Draggable]?: boolean;
    [ToastiveProp.Duration]?: number;
    [ToastiveProp.Title]?: string;
    [ToastiveProp.Message]?: string;
    [ToastiveProp.Position]?: ToastivePosition;
    [ToastiveProp.Variant]?: ToastiveVariant;
}
