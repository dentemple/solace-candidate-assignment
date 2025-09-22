export type mergeClassnames = (...classnames: (string | undefined)[]) => string;

export function mergeClassnames(...classnames: (string | undefined)[]): string {
  return classnames.filter(Boolean).join(' ');
}

export const cn = mergeClassnames;

export default mergeClassnames;
