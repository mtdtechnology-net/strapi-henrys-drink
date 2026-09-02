import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'attachment';
  };
  attributes: {
    FooterContactDays: Schema.Attribute.String;
    FooterContactHours: Schema.Attribute.String;
    FooterContactTitle: Schema.Attribute.String;
    FooterPoliciesTitle: Schema.Attribute.String;
    FooterPrivacyPolicy: Schema.Attribute.String;
    FooterRefundPolicy: Schema.Attribute.String;
    FooterShippingDelivery: Schema.Attribute.String;
    FooterTermsConditions: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bulletList';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    NavbarCocktails: Schema.Attribute.String;
    NavbarContact: Schema.Attribute.String;
    NavbarFrenchVermouth: Schema.Attribute.String;
    NavbarOurStory: Schema.Attribute.String;
  };
}

export interface SectionsCocktailsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cocktails_sections';
  info: {
    displayName: 'CocktailsSection';
    icon: 'crown';
  };
  attributes: {
    CocktailCornerTitle: Schema.Attribute.String;
    CocktailDescription1: Schema.Attribute.Text;
    CocktailDescription10: Schema.Attribute.Text;
    CocktailDescription11: Schema.Attribute.Text;
    CocktailDescription2: Schema.Attribute.Text;
    CocktailDescription3: Schema.Attribute.Text;
    CocktailDescription4: Schema.Attribute.Text;
    CocktailDescription5: Schema.Attribute.Text;
    CocktailDescription6: Schema.Attribute.Text;
    CocktailDescription7: Schema.Attribute.Text;
    CocktailDescription8: Schema.Attribute.Text;
    CocktailDescription9: Schema.Attribute.Text;
    CocktailName1: Schema.Attribute.String;
    CocktailName10: Schema.Attribute.String;
    CocktailName11: Schema.Attribute.String;
    CocktailName2: Schema.Attribute.String;
    CocktailName3: Schema.Attribute.String;
    CocktailName4: Schema.Attribute.String;
    CocktailName5: Schema.Attribute.String;
    CocktailName6: Schema.Attribute.String;
    CocktailName7: Schema.Attribute.String;
    CocktailName8: Schema.Attribute.String;
    CocktailName9: Schema.Attribute.String;
    CocktailTagline1: Schema.Attribute.Text;
    CocktailTagline10: Schema.Attribute.String;
    CocktailTagline11: Schema.Attribute.String;
    CocktailTagline2: Schema.Attribute.String;
    CocktailTagline3: Schema.Attribute.String;
    CocktailTagline4: Schema.Attribute.String;
    CocktailTagline5: Schema.Attribute.String;
    CocktailTagline6: Schema.Attribute.String;
    CocktailTagline7: Schema.Attribute.String;
    CocktailTagline8: Schema.Attribute.String;
    CocktailTagline9: Schema.Attribute.String;
  };
}

export interface SectionsCraftedSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_crafted_sections';
  info: {
    displayName: 'CraftedSection';
    icon: 'book';
  };
  attributes: {
    CraftedParagraph1: Schema.Attribute.Text;
    CraftedParagraph2: Schema.Attribute.Text;
    CraftedParagraph3: Schema.Attribute.Text;
    CraftedParagraph4: Schema.Attribute.Text;
    CraftedTitle: Schema.Attribute.String;
  };
}

export interface SectionsDifferentRhythmSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_different_rhythm_sections';
  info: {
    displayName: 'DifferentRhythmSection';
    icon: 'crown';
  };
  attributes: {
    RhythmParagraph1: Schema.Attribute.Text;
    RhythmParagraph2: Schema.Attribute.Text;
    RhythmTitle: Schema.Attribute.String;
  };
}

export interface SectionsEnterTheNightSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_enter_the_night_sections';
  info: {
    displayName: 'EnterTheNightSection';
    icon: 'book';
  };
  attributes: {
    EnterTheNightButton: Schema.Attribute.String;
    EnterTheNightDescription: Schema.Attribute.Text;
    EnterTheNightTitle: Schema.Attribute.String;
  };
}

export interface SectionsFamilyHistorySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_family_history_sections';
  info: {
    displayName: 'FamilyHistorySection';
    icon: 'book';
  };
  attributes: {
    FamilyDescription: Schema.Attribute.Text;
    FamilyTitle: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'star';
  };
  attributes: {
    HeroDescription: Schema.Attribute.Text;
    HeroTitle: Schema.Attribute.String;
  };
}

export interface SectionsIdentitySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_identity_sections';
  info: {
    displayName: 'IdentitySection';
    icon: 'book';
  };
  attributes: {
    IdentityParagraph1: Schema.Attribute.Text;
    IdentityParagraph2: Schema.Attribute.Text;
    IdentityParagraph3: Schema.Attribute.Text;
    IdentityParagraph4: Schema.Attribute.Text;
    IdentitySubtitle: Schema.Attribute.String;
    IdentityTextButton: Schema.Attribute.String;
    IdentityTitle: Schema.Attribute.String;
  };
}

export interface SectionsMeetTheManSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_meet_the_man_sections';
  info: {
    displayName: 'MeetTheManSection';
    icon: 'crown';
  };
  attributes: {
    MeetTheManButton: Schema.Attribute.String;
    MeetTheManDescription: Schema.Attribute.Text;
    MeetTheManTitle: Schema.Attribute.String;
  };
}

export interface SectionsMoreThanADrinkSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_more_than_a_drink_sections';
  info: {
    displayName: 'MoreThanADrinkSection';
    icon: 'book';
  };
  attributes: {
    MoreThanADrinkParagraph1: Schema.Attribute.Text;
    MoreThanADrinkParagraph2: Schema.Attribute.Text;
    MoreThanADrinkParagraph3: Schema.Attribute.Text;
    MoreThanADrinkTitle: Schema.Attribute.String;
  };
}

export interface SectionsNightComesAliveSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_night_comes_alive_sections';
  info: {
    displayName: 'NightComesAliveSection';
    icon: 'crown';
  };
  attributes: {
    NightDescription: Schema.Attribute.Text;
    NightTitle: Schema.Attribute.String;
  };
}

export interface SectionsSharedSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_shared_sections';
  info: {
    displayName: 'SharedSection';
    icon: 'crown';
  };
  attributes: {
    SharedParagraph1: Schema.Attribute.Text;
    SharedParagraph2: Schema.Attribute.Text;
    SharedSubtitle: Schema.Attribute.String;
    SharedTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
      'sections.cocktails-section': SectionsCocktailsSection;
      'sections.crafted-section': SectionsCraftedSection;
      'sections.different-rhythm-section': SectionsDifferentRhythmSection;
      'sections.enter-the-night-section': SectionsEnterTheNightSection;
      'sections.family-history-section': SectionsFamilyHistorySection;
      'sections.hero-section': SectionsHeroSection;
      'sections.identity-section': SectionsIdentitySection;
      'sections.meet-the-man-section': SectionsMeetTheManSection;
      'sections.more-than-a-drink-section': SectionsMoreThanADrinkSection;
      'sections.night-comes-alive-section': SectionsNightComesAliveSection;
      'sections.shared-section': SectionsSharedSection;
    }
  }
}
