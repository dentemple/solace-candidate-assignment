import { useEffect, useState } from 'react';

import { BodyText, Box, Row, StandardButton, Textbox } from '@/app/components/common';
import './search-input.css';

import { cn } from '@/app/utils';
import type { CommonProps } from '@/app/types';

export interface Props extends CommonProps {
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetClick?: () => void;
  searchTerm?: string;
}

/**
 * Molecule for searching and displaying a search term
 */
export function SearchInput({ handleSearchChange, handleResetClick, searchTerm, ...rest }: Props) {
  const containerProps = {
    ...rest,
    className: cn('search-input', rest.className),
    'data-testid': 'search-input',
  };

  return (
    <Box {...containerProps}>
      <Row>
        <BodyText aria-live="polite">
          <em>Searching for:</em> <span className="search-term">{searchTerm}</span>
        </BodyText>
      </Row>
      <Row>
        <StandardButton name="reset-search" onClick={handleResetClick}>
          Reset Search
        </StandardButton>
        <Textbox name="search-input" onChange={handleSearchChange} />
      </Row>
    </Box>
  );
}

export default SearchInput;
