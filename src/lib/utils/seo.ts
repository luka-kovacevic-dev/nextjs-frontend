import {
  Organization,
  WebPage,
  WebSite,
  AboutPage,
  FAQPage,
  Product,
} from '../types/schema';

interface OGImage {
  url: string;
  width: number;
  height: number;
  alt: string;
  type?: string;
}

export const validateStructuredData = (
  schema: Organization | WebPage | WebSite | AboutPage | FAQPage | Product,
): boolean => {
  // Basic validation rules
  if (!schema['@context'] || schema['@context'] !== 'https://schema.org') {
    console.error('Invalid @context in schema');
    return false;
  }

  if (!schema['@type']) {
    console.error('Missing @type in schema');
    return false;
  }

  // Type-specific validation
  switch (schema['@type']) {
    case 'Organization':
      return validateOrganization(schema as Organization);
    case 'WebPage':
    case 'AboutPage':
      return validateWebPage(schema as WebPage);
    case 'WebSite':
      return validateWebSite(schema as WebSite);
    case 'FAQPage':
      return validateFAQPage(schema as FAQPage);
    case 'Product':
      return validateProduct(schema as Product);
    default:
      console.error(`Unknown schema type: ${schema['@type']}`);
      return false;
  }
};

const validateOrganization = (org: Organization): boolean => {
  if (!org.name || !org.url || !org.logo) {
    console.error('Organization schema missing required fields');
    return false;
  }
  return true;
};

const validateWebPage = (page: WebPage): boolean => {
  if (!page.name || !page.description || !page.url) {
    console.error('WebPage schema missing required fields');
    return false;
  }
  return true;
};

const validateWebSite = (site: WebSite): boolean => {
  if (!site.name || !site.url) {
    console.error('WebSite schema missing required fields');
    return false;
  }
  return true;
};

const validateFAQPage = (faq: FAQPage): boolean => {
  if (!Array.isArray(faq.mainEntity)) {
    console.error('FAQPage schema mainEntity must be an array');
    return false;
  }
  return faq.mainEntity.every(
    (item) =>
      item['@type'] === 'Question' &&
      item.name &&
      item.acceptedAnswer &&
      item.acceptedAnswer['@type'] === 'Answer' &&
      item.acceptedAnswer.text,
  );
};

const validateProduct = (product: Product): boolean => {
  if (!product.name || !product.description || !Array.isArray(product.offers)) {
    console.error('Product schema missing required fields');
    return false;
  }
  return product.offers.every(
    (offer) => offer['@type'] === 'Offer' && offer.price && offer.priceCurrency,
  );
};

export const generateOGImage = (
  title: string,
  description: string,
  imagePath: string = '/og-image.jpg',
  options: Partial<OGImage> = {},
): OGImage[] => {
  // Default OG image
  const defaultImage: OGImage = {
    url: imagePath,
    width: 1200,
    height: 630,
    alt: title,
    type: 'image/jpeg',
    ...options,
  };

  // Fallback image
  const fallbackImage: OGImage = {
    url: '/default-og.jpg',
    width: 1200,
    height: 630,
    alt: title,
    type: 'image/jpeg',
  };

  return [defaultImage, fallbackImage];
};

export const validateOGImage = (image: OGImage): boolean => {
  // Validate dimensions
  if (image.width < 200 || image.height < 200) {
    console.error('OG image dimensions too small');
    return false;
  }

  // Validate aspect ratio (should be close to 1.91:1)
  const aspectRatio = image.width / image.height;
  if (Math.abs(aspectRatio - 1.91) > 0.1) {
    console.warn('OG image aspect ratio should be close to 1.91:1');
  }

  // Validate image type
  if (
    image.type &&
    !['image/jpeg', 'image/png', 'image/gif'].includes(image.type)
  ) {
    console.error('Invalid OG image type');
    return false;
  }

  return true;
};
