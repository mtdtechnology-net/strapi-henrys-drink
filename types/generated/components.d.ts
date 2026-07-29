import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bulletList';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsFamilyHistorySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_family_history_sections';
  info: {
    displayName: 'FamilyHistorySection';
    icon: 'book';
  };
  attributes: {};
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'star';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.navbar': LayoutNavbar;
      'sections.family-history-section': SectionsFamilyHistorySection;
      'sections.hero-section': SectionsHeroSection;
    }
  }
}
