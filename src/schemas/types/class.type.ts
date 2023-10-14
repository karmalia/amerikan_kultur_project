export enum ELanguages {
  "tr" = "Türkçe",
  "en" = "İngilizce",
  "de" = "Almanca",
  "fr" = "Fransızca",
  "es" = "İspanyolca",
  "it" = "İtalyanca",
}

type TStudent = {
  id: string;
  name: string;
  surname: string;
  birthDate: string;
  email: string;
  parentsName: string;
  parentsSurname: string;
  parentsEmail: string;
  parentsPhone: string;
};

type TClassDate = {
  id: string;
  startDate: string;
  endDate: string;
};

export type TClass = {
  id: string;
  name: string;
  description: string;
  classDates: TClassDate;
  language: ELanguages;
  teacher: string;
  students: TStudent[];
};
