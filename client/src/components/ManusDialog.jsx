import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// 1. REMOVED: interface ManusDialogProps

export function ManusDialog({
  title,
  logo,
  open = false,
  onLogin,
  onOpenChange,
  onClose,
}) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    if (!onOpenChange) {
      setInternalOpen(open);
    }
  }, [open, onOpenChange]);

  // 2. REMOVED: ": boolean" type annotation
  const handleOpenChange = (nextOpen) => {
    if (onOpenChange) {
      onOpenChange(nextOpen);
    } else {
      setInternalOpen(nextOpen);
    }

    if (!nextOpen) {
      onClose?.();
    }
  };

  return (
    <Dialog
      open={onOpenChange ? open : internalOpen}
      onOpenChange={handleOpenChange}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col items-center justify-center text-center">
          {logo ? (
            <div className="mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            </div>
          ) : null}

          {title ? (
            <DialogTitle className="text-xl font-bold tracking-tight">
              {title}
            </DialogTitle>
          ) : null}
          
          <DialogDescription className="text-muted-foreground">
            Please login with Manus to continue
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <Button
            onClick={onLogin}
            className="w-full h-10 bg-[#1a1a19] hover:bg-[#1a1a19]/90 text-white rounded-[10px] text-sm font-medium leading-5 tracking-[-0.154px]"
          >
            Login with Manus
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}