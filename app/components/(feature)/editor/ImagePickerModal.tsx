"use client";

import TiptapEditorModel from "@/app/components/(feature)/editor/TiptapEditorModel";
import { MediaTypeEnum } from "@/app/types/mediaServiceType";

interface ImagePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (mediaId: number, url: string) => void;
}

export default function ImagePickerModal({ isOpen, onClose, onSelect }: ImagePickerModalProps) {
  return (
    <TiptapEditorModel
      type={MediaTypeEnum.image}
      isOpen={isOpen}
      onClose={onClose}
      onSelect={onSelect}
    />
  );
}
