import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Check } from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-primary group-[.toaster]:text-primary-foreground group-[.toaster]:border-primary/10 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-primary-foreground/90",
          actionButton:
            "group-[.toast]:bg-white group-[.toast]:text-primary",
          cancelButton:
            "group-[.toast]:bg-primary-foreground/20 group-[.toast]:text-primary-foreground",
        },
      }}
      icons={{
        success: (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
            <Check className="h-3 w-3 text-primary" strokeWidth={4} />
          </div>
        ),
      }}
      {...props}
    />
  );
};

export { Toaster };
