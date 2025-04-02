export interface SchemaBase {
  '@context': 'https://schema.org';
  '@type': string;
}

export interface Organization extends SchemaBase {
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
  description?: string;
}

export interface WebSite extends SchemaBase {
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
}

export interface WebPage extends SchemaBase {
  '@type': 'WebPage' | 'AboutPage';
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbList;
}

export interface AboutPage extends Omit<WebPage, '@type'> {
  '@type': 'AboutPage';
}

export interface FAQPage extends SchemaBase {
  '@type': 'FAQPage';
  mainEntity: Question[];
}

export interface Question {
  '@type': 'Question';
  name: string;
  acceptedAnswer: Answer;
}

export interface Answer {
  '@type': 'Answer';
  text: string;
}

export interface Product extends SchemaBase {
  '@type': 'Product';
  name: string;
  description: string;
  offers: Offer[];
}

export interface Offer {
  '@type': 'Offer';
  price: string;
  priceCurrency: string;
  availability?: string;
}

export interface BreadcrumbList extends SchemaBase {
  '@type': 'BreadcrumbList';
  itemListElement: ListItem[];
}

export interface ListItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}
