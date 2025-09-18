'use client';

import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from './hooks';
import { selectors, asyncActions } from './state/advocates';

export default function Home() {
  const dispatch = useAppDispatch();

  const advocates = useAppSelector(selectors.getAdvocates) || [];
  const filteredAdvocates = useAppSelector(selectors.getFilteredAdvocates) || [];

  useEffect(() => {
    console.log('fetching advocates...');
    dispatch(asyncActions.fetchAdvocates());
  }, [dispatch]);

  const onChange = (e) => {
    // TODO - implement filtering
    const searchTerm = e.target.value;

    document.getElementById('search-term').innerHTML = searchTerm;
  };

  const onClick = () => {
    console.log(advocates);
  };

  return (
    <main style={{ margin: '24px' }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input style={{ border: '1px solid black' }} onChange={onChange} />
        <button onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
          {filteredAdvocates?.map((advocate) => {
            return (
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s, i) => (
                    <div key={i}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
