export enum ToastiveProp {
	AutoClose = 'autoClose',
	closeButton = 'closeButton',
	Duration = 'duration',
	Title = 'title',
	Message = 'message',
	Position = 'position',
	Variant = 'variant'
}

export enum ToastiveVariant {
	Error = 'error',
	Info = 'info',
	Light = 'light',
	Loading = 'loading',
	Success = 'success',
	Warning = 'warning'
}

export enum ToastivePosition {
	TopRight = 'top-right',
	TopLeft = 'top-left',
	BottomRight = 'bottom-right',
	BottomLeft = 'bottom-left'
}

export interface ToastiveProps {
	[ToastiveProp.AutoClose]?: boolean
	[ToastiveProp.closeButton]?: boolean
	[ToastiveProp.Duration]?: number
	[ToastiveProp.Title]?: string
	[ToastiveProp.Message]?: string
	[ToastiveProp.Position]?: ToastivePosition
	[ToastiveProp.Variant]?: ToastiveVariant
}
