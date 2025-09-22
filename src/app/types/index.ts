export type Advocates = Advocate[];
export interface Advocate {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: AdvocateSpecialties;
  yearsOfExperience: number;
  phoneNumber: number;
  createdAt: string;
}

export type AdvocateSpecialties = AdvocateSpecialty[];
export type AdvocateSpecialty = string;

export enum AdvocateTableColumnNames {
  FirstName = 'First Name',
  LastName = 'Last Name',
  City = 'City',
  Degree = 'Degree',
  Specialties = 'Specialties',
  YearsOfExperience = 'Years of Experience',
  PhoneNumber = 'Phone Number',
}

/**
 * An interface for common component props.
 *
 * Follows the principle of "open for extension, closed for modification".
 */
export interface CommonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
