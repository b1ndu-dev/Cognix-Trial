"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";

export const CoverImageModal = () => {
  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">
            Cover Image
          </h2>
        </DialogHeader>
        {/* Mock file upload */}
        <div className="p-4 border-dashed border-2 border-muted-foreground rounded-lg">
            <p className="text-center text-muted-foreground">
                In a real app, you would upload an image here.
            </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
