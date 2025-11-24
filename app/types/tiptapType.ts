/**
 * Tiptap JSON Content Types
 * 基于 Tiptap 的 JSONContent 结构定义，兼容 @tiptap/core 的 JSONContent
 */

export interface TiptapMark {
  type: string;
  attrs?: Record<string, string | number | boolean | null>;
  [key: string]:
    | string
    | number
    | boolean
    | null
    | Record<string, string | number | boolean | null>
    | undefined;
}

export interface TiptapNode {
  type?: string;
  attrs?: Record<string, string | number | boolean | null>;
  content?: TiptapNode[];
  marks?: TiptapMark[];
  text?: string;
  [key: string]:
    | string
    | number
    | boolean
    | null
    | TiptapNode[]
    | TiptapMark[]
    | Record<string, string | number | boolean | null>
    | undefined;
}

export interface TiptapContent extends TiptapNode {
  type?: string;
  content?: TiptapNode[];
}
