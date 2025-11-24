"use client";

import TiptapEditorModel from "@/app/components/(feature)/editor/TiptapEditorModel";
import { MediaTypeEnum } from "@/app/types/mediaServiceType";

interface DocumentPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (mediaId: number, url: string) => void;
}

export default function DocumentPickerModal({
  isOpen,
  onClose,
  onSelect,
}: DocumentPickerModalProps) {
  return (
    <TiptapEditorModel
      type={MediaTypeEnum.other}
      isOpen={isOpen}
      onClose={onClose}
      onSelect={onSelect}
    />
  );
}
