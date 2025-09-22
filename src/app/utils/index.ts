export { mergeClassnames } from './mergeClassnames';
export { cn } from './mergeClassnames'; // alternative name for mergeClassnames

/**
 * naive/simple implementation of slugify
 */
export function slugify(text: string) {
  return text.toString().toLowerCase().trim().replace(/\s+/g, '-'); // Replace spaces with -
}

export function isPrimitive(value: any) {
  return ['string', 'number', 'boolean'].includes(typeof value);
}
