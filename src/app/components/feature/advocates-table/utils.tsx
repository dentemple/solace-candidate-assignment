import { AdvocateTableColumnNames } from '@/app/types';
import type { Advocate, Advocates, AdvocateSpecialties } from '@/app/types';

export function mapAdvocatesToRecords(filteredAdvocates: Advocates) {
  return filteredAdvocates.map((advocate) => ({
    [AdvocateTableColumnNames.FirstName]: advocate.firstName,
    [AdvocateTableColumnNames.LastName]: advocate.lastName,
    [AdvocateTableColumnNames.City]: advocate.city,
    [AdvocateTableColumnNames.Degree]: advocate.degree,
    [AdvocateTableColumnNames.Specialties]: mapSpecialtiesToCell(advocate.specialties),
    [AdvocateTableColumnNames.YearsOfExperience]: advocate.yearsOfExperience,
    [AdvocateTableColumnNames.PhoneNumber]: advocate.phoneNumber,
  }));
}

function mapSpecialtiesToCell(specialties: AdvocateSpecialties) {
  return specialties.map((s, i) => <div key={i}>{s}</div>);
}

export function filterAdvocates(advocates: Advocates, searchTerm: string) {
  if (!searchTerm) return advocates;

  return advocates.filter((advocate: Advocate) => {
    const listAllRows = createListFromTerms(
      advocate.firstName,
      advocate.lastName,
      advocate.city,
      advocate.degree,
      ...advocate.specialties,
      advocate.yearsOfExperience,
      advocate.phoneNumber,
    );
    return listAllRows.some((row) => row.includes(searchTerm.toLowerCase()));
  });
}

function createListFromTerms(...values: (string | number)[]) {
  return values.map((v) => (v ? v.toString().toLowerCase() : '')).filter((v) => v);
}
