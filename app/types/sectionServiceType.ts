import type {
  ChineseDescription,
  ChineseTitle,
  CreatedAt,
  Description,
  IsActive,
  NumberType,
  ParentID,
  SectionID,
  SeoID,
  Slug,
  StringType,
  Title,
  UpdatedAt,
} from "./commonType";

export interface SectionListItem extends SectionID, StringType, Title, Slug {
  description?: string;
}

export interface GetSectionSeoBySlugRequest extends Slug {
  // Intentionally empty - extends Slug interface
}

export interface GetSectionDetailsBySlugRequest extends Slug {
  // Intentionally empty - extends Slug interface
}

export interface CreateSectionRequest
  extends SeoID,
    NumberType,
    ChineseTitle,
    ChineseDescription,
    ParentID {}

export interface UpdateSectionRequest
  extends SectionID,
    SeoID,
    ChineseTitle,
    ChineseDescription,
    IsActive {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DeleteSectionRequest extends SectionID {}

export interface SectionChild {
  section_id: number;
  slug: string;
  type: string;
  title: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at?: string;
}

export interface SectionListResponse {
  section_id: number;
  slug: string;
  type: string;
  title: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at?: string;
  children?: SectionChild[];
}

export interface GetSectionDetailsResponse
  extends SectionID,
    StringType,
    Slug,
    Title,
    Description,
    ParentID,
    CreatedAt,
    UpdatedAt {
  // Intentionally empty - combines multiple interfaces
}

export interface GetSectionSeoResponse {
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  keywords: {
    zh: string;
    en: string;
  };
}
