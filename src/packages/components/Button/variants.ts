import { VariantProps, tv } from "tailwind-variants";

export const button = tv({
  base: "rounded-[8px] disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold transition-all",
  variants: {
    size: {
      sm: "text-sm py-2 px-4",
      lg: "text-base p-4",
    },
    color: {
      primary:
        "bg-primary-400 hover:bg-primary-400 focus:bg-primary-700 text-white",
      grey: "bg-grey-500 hover:bg-grey-700 focus:bg-grey-900 text-white",
      destructive:
        "bg-primary-500 hover:bg-primary-400 focus:bg-primary-700 text-white",
      success:
        "bg-success-500 hover:bg-success-400 focus:bg-primary-700 text-white",
      warning:
        "bg-warning-400 hover:bg-warning-200 focus:bg-warning-500 text-black",
      secondary:
        "bg-secondary-500 hover:bg-secondary-300 focus:bg-secondary-600 text-white",
    },
  },
});

export type ButtonVariants = VariantProps<typeof button>;
