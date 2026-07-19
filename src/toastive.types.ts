/**
 * Toastive Properties
 * @enum {string}
 * @readonly
 *
 * @property {string} Action - Action button config
 * @property {string} AutoClose - Auto close the toast
 * @property {string} CloseButton - Show close button
 * @property {string} CustomIcon - HTML string to use as the default icon slot content
 * @property {string} Draggable - Draggable the toast
 * @property {string} Duration - Duration of the toast
 * @property {string} Message - Message of the toast
 * @property {string} PauseOnHover - Pause timer on hover/focus
 * @property {string} Position - Position of the toast
 * @property {string} Theme - Color theme (light/dark)
 * @property {string} Title - Title of the toast
 * @property {string} Variant - Variant of the toast
 */
export enum ToastiveProp {
  Action = 'action',
  AutoClose = 'autoClose',
  CloseButton = 'closeButton',
  CustomIcon = 'customIcon',
  Draggable = 'draggable',
  Duration = 'duration',
  Message = 'message',
  PauseOnHover = 'pauseOnHover',
  Position = 'position',
  Theme = 'theme',
  Title = 'title',
  Variant = 'variant'
}

/**
 * Toastive Variants
 * @enum {string}
 * @readonly
 *
 * @property {string} Default - Default variant
 * @property {string} Error - Error variant
 * @property {string} Info - Info variant
 * @property {string} Loading - Loading variant
 * @property {string} Success - Success variant
 * @property {string} Warning - Warning variant
 */
export enum ToastiveVariant {
  Default = 'default',
  Error = 'error',
  Info = 'info',
  Loading = 'loading',
  Success = 'success',
  Warning = 'warning'
}

/**
 * Toastive Position
 * @enum {string}
 * @readonly
 *
 * @property {string} BottomCenter - Bottom center position
 * @property {string} BottomLeft - Bottom left position
 * @property {string} BottomRight - Bottom right position
 * @property {string} TopCenter - Top center position
 * @property {string} TopLeft - Top left position
 * @property {string} TopRight - Top right position
 */
export enum ToastivePosition {
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  TopCenter = 'top-center',
  TopLeft = 'top-left',
  TopRight = 'top-right'
}

/**
 * Toastive Theme
 * @enum {string}
 * @readonly
 *
 * @property {string} Dark - Dark theme
 * @property {string} Light - Light theme (default)
 */
export enum ToastiveTheme {
  Dark = 'dark',
  Light = 'light'
}

/**
 * Action button configuration for a toast.
 * @interface ToastiveAction
 *
 * @property {boolean} [closeOnClick] - Whether to close the toast when the action button is clicked (default: true)
 * @property {string} label - Label for the action button
 * @property {() => void} onClick - Callback function to execute when the action button is clicked
 *
 * @example
 * showToastive({
 *   message: 'Item deleted',
 *   action: {
 *     label: 'Undo',
 *     onClick: () => restoreItem(),
 *     closeOnClick: true  // default
 *   }
 * })
 */
export interface ToastiveAction {
  closeOnClick?: boolean
  label: string
  onClick: () => void
}

/**
 * Toastive Properties
 * @interface ToastiveProps
 *
 * @property {ToastiveAction} [action] - Optional secondary action button
 * @property {boolean} [autoClose] - Auto close the toast
 * @property {boolean} [closeButton] - Show close button
 * @property {string} [customIcon] - HTML string for the icon slot default content
 * @property {boolean} [draggable] - Draggable the toast
 * @property {number} [duration] - Duration of the toast
 * @property {string} [message] - Message of the toast
 * @property {boolean} [pauseOnHover] - Pause timer on hover/focus
 * @property {ToastivePosition} [position] - Position of the toast
 * @property {ToastiveTheme} [theme] - Color theme (light/dark)
 * @property {string} [title] - Title of the toast
 * @property {ToastiveVariant} [variant] - Variant of the toast
 */
export interface ToastiveProps {
  [ToastiveProp.Action]?: ToastiveAction
  [ToastiveProp.AutoClose]?: boolean
  [ToastiveProp.CloseButton]?: boolean
  [ToastiveProp.CustomIcon]?: string
  [ToastiveProp.Draggable]?: boolean
  [ToastiveProp.Duration]?: number
  [ToastiveProp.Message]?: string
  [ToastiveProp.PauseOnHover]?: boolean
  [ToastiveProp.Position]?: ToastivePosition
  [ToastiveProp.Theme]?: ToastiveTheme
  [ToastiveProp.Title]?: string
  [ToastiveProp.Variant]?: ToastiveVariant
}

/**
 * Toastive global defaults — passed to `setDefaults()`.
 * Includes `maxVisible` which is a per-position cap enforced FIFO.
 *
 * @interface ToastiveDefaults
 *
 * @property {number} [maxVisible] - Max active toasts per position. Older toasts close (animated) before new ones are added.
 */
export interface ToastiveDefaults extends Partial<ToastiveProps> {
  maxVisible?: number
}

/**
 * Toastive instance type — represents a single toast element returned by `showToastive()`.
 */
export type ToastiveInstance = HTMLElement & {
  close: () => void
  update: (props?: Omit<ToastiveProps, ToastiveProp.Position>) => void
}
