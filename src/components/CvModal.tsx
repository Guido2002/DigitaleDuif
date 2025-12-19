import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface CvModalProps {
  trigger: React.ReactNode;
}

const CvModal: React.FC<CvModalProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download CV
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Download mijn CV om meer te weten te komen over mijn ervaring en vaardigheden.
          </p>
          <Button asChild className="w-full">
            <a 
              href="/cv.pdf" 
              download="Guido_van_Duijvenvoorde_CV.pdf"
              className="flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CvModal;
