import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import cvPdf from "@/assets/cv.pdf";

interface CvModalProps {
  trigger: React.ReactNode;
}

const CvModal: React.FC<CvModalProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl" aria-describedby="cv-modal-description">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" aria-hidden="true" />
            Download CV
          </DialogTitle>
          <DialogDescription id="cv-modal-description" className="sr-only">
            Download Guido's CV als PDF bestand
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Download mijn CV om meer te weten te komen over mijn ervaring en vaardigheden.
          </p>
          <Button asChild className="w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <a 
              href={cvPdf} 
              download="Guido_van_Duijvenvoorde_CV.pdf"
              className="flex items-center justify-center gap-2"
              aria-label="Download CV als PDF bestand"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download PDF
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CvModal;
