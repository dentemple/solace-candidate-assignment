export interface Advocate {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: Specialty[];
  yearsOfExperience: number;
  phoneNumber: number;
  createdAt: string;
}

export type Advocates = Advocate[];

export type Specialty = string;
