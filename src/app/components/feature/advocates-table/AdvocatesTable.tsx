import { useEffect, useState, useMemo } from 'react';

import { Box, BodyText, SearchInput, Table } from '@/app/components/common';

import './advocates-table.css';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectors, asyncActions } from '@/app/state/advocates';
import * as localUtils from './utils';

export interface Props {}

/**
 * Stateful component for displaying a table of advocates with search functionality
 */
export function AdvocatesTable({ ...rest }: Props) {
  const nullSearch = '';

  /* custom hooks */
  const dispatch = useAppDispatch();
  const advocates = useAppSelector(selectors.getAdvocates);

  /* state hooks */
  const [searchTerm, setSearchTerm] = useState(nullSearch);

  /* mutation/effect hooks */
  useEffect(() => {
    console.log('fetching advocates...');
    dispatch(asyncActions.fetchAdvocates());
  }, [dispatch]);

  const filteredAdvocates = useMemo(() => localUtils.filterAdvocates(advocates, searchTerm), [advocates, searchTerm]);
  const records = useMemo(() => localUtils.mapAdvocatesToRecords(filteredAdvocates), [filteredAdvocates]);

  /* event handlers */
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleResetClick() {
    setSearchTerm(nullSearch);
  }

  /* render */
  const containerProps = {
    ...rest,
    className: 'advocates-table',
    'data-testid': 'advocates-table',
  };

  const searchProps = {
    handleSearchChange,
    handleResetClick,
    searchTerm,
  };

  const tableProps = {
    records,
  };

  return (
    <Box {...containerProps}>
      <h2>Search</h2>
      <SearchInput {...searchProps} />
      <Table {...tableProps} />
    </Box>
  );
}

export default AdvocatesTable;
