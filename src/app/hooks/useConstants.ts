import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solace Candidate Assignment',
  description: 'Show us what you got',
};

export function useConstants() {
  const appName = 'Solace Advocates';
  return {
    metadata,
    appName,
  };
}

export type useConstantsReturn = ReturnType<typeof useConstants>;

export default useConstants;
