"use client";

import TiptapEditorModel from "@/app/components/(feature)/editor/TiptapEditorModel";
import { MediaTypeEnum } from "@/app/types/mediaServiceType";

interface AudioPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (mediaId: number, url: string) => void;
}

export default function AudioPickerModal({ isOpen, onClose, onSelect }: AudioPickerModalProps) {
  return (
    <TiptapEditorModel
      type={MediaTypeEnum.audio}
      isOpen={isOpen}
      onClose={onClose}
      onSelect={onSelect}
    />
  );
}
