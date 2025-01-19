import type { Meta, StoryObj } from "@storybook/web-components";
import { ToastivePosition, ToastiveVariant, type ToastiveProps } from "../src/toast.types";
import useToastive from "../src/useToastive";

const meta: Meta<ToastiveProps> = {
  argTypes: {
    autoClose: {
      control: {
        type: "boolean",
      },
      description: "Auto close the toast after a certain duration",
      name: "Auto Close",
      type: {
        name: "boolean",
        required: false,
      },
    },
    closeButton: {
      control: {
        type: "boolean",
      },
      description: "Show a close button to dismiss the toast",
      name: "Close Button",
      type: {
        name: "boolean",
        required: false,
      },
    },
    duration: {
      control: {
        type: "number",
      },
      description: "Duration in milliseconds before the toast auto closes",
      name: "Duration",
      type: {
        name: "number",
        required: false,
      },
    },
    message: {
      control: {
        type: "text",
      },
      description: "Message to display in the toast",
      name: "Message",
      type: {
        name: "string",
        required: false,
      },
    },
    position: {
      control: {
        type: "select",
      },
      description: "Position of the toast on the screen",
      name: "Position",
      options: Object.values(ToastivePosition),
      type: {
        name: "string",
        required: false,
      },
    },
    title: {
      control: {
        type: "text",
      },
      description: "Title to display in the toast",
      name: "Title",
      type: {
        name: "string",
        required: false,
      },
    },
    variant: {
      control: {
        type: "select",
      },
      description: "Variant color of the toast",
      options: Object.values(ToastiveVariant),
      name: "Variant",
      type: {
        name: "string",
        required: false,
      },
    },
  },
  component: "toastive",
  parameters: {
    layour: "centered",
  },
  title: "Toastive",
};

export default meta;

export const playground: StoryObj<ToastiveProps> = (args: ToastiveProps) => {
  const showToast = () => {
    const toast = useToastive({
      autoClose: args.autoClose,
      closeButton: args.closeButton,
      duration: args.duration,
      message: args.message,
      position: args.position,
      title: args.title,
      variant: args.variant,
    });

    toast.addEventListener("click", () => {
      toast.update({ variant: ToastiveVariant.Success, closeButton: true });
    });
  };

  const createButton = document.createElement("button");
  createButton.textContent = "Show Toast";
  createButton.addEventListener("click", showToast);

  const clearButton = document.createElement("button");
  clearButton.textContent = "Clear Toasts";
  clearButton.addEventListener("click", () => {
    document.querySelectorAll("mm-toastive-wrapper").forEach((toastive) => toastive.remove());
  });

  const buttonsContainer = document.createElement("div");
  buttonsContainer.append(createButton, clearButton);

  return buttonsContainer;
};

playground.argTypes = meta.argTypes;

playground.args = {
  autoClose: undefined,
  closeButton: undefined,
  duration: undefined,
  message: "👋 Hi there, I'm a toast!!",
  position: undefined,
  title: undefined,
  variant: undefined,
};
