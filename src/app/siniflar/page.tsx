"use client";
import { Button } from "@/components/ui/button";
import { ELanguages, TClass } from "@/schemas/types/class.type";
import React, { useEffect, useState } from "react";

type Props = {};

function SiniflarPage({}: Props) {
  const [currentClass, setCurrentClass] = useState<TClass | null>(null);

  const siniflar: TClass[] = [
    {
      id: "1",
      language: ELanguages.en,
      name: "İngilizce Teens 1",
      classDates: {
        id: "date1",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
      description: "string",
      teacher: "string",
      students: [
        {
          id: "1",
          name: "Jan",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "jan@gmail.com",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
        {
          id: "2",
          name: "Jan",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
      ],
    },
    {
      id: "2",
      language: ELanguages.de,
      name: "Almanca Teens 1",
      classDates: {
        id: "date2",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
      description: "string",
      teacher: "string",
      students: [
        {
          id: "3",
          name: "Nurullah",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
        {
          id: "4",
          name: "Fatma",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
      ],
    },
    {
      id: "3",
      language: ELanguages.en,
      name: "İngilizce Teens 2",
      classDates: {
        id: "date3",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
      description: "string",
      teacher: "string",
      students: [
        {
          id: "5",
          name: "Ebru",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
        {
          id: "6",
          name: "Ezgi",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
      ],
    },
    {
      id: "4",
      language: ELanguages.en,
      name: "İngilizce Teens 3",
      classDates: {
        id: "date4",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
      description: "string",
      teacher: "string",
      students: [
        {
          id: "7",
          name: "Muhammed",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
        {
          id: "8",
          name: "Ahmet",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
      ],
    },
    {
      id: "5",
      language: ELanguages.it,
      name: "İtalyanca Teens 1",
      classDates: {
        id: "date5",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
      description: "string",
      teacher: "string",
      students: [
        {
          id: "9",
          name: "Alyena",
          surname: "Kowalski",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
        {
          id: "10",
          name: "Nekopara aslında o kadar kötü",
          surname: " oyunda değil",
          birthDate: "1990-01-01",
          email: "",
          parentsName: "Jannnay",
          parentsSurname: "shutz",
          parentsEmail: "",
          parentsPhone: "+905552223355",
        },
      ],
    },
  ];

  useEffect(() => {
    //serverdan data geldikten sonra ilk sınıf default olarak atanır
    setCurrentClass(siniflar[0]);
  }, []);

  const tableHead = [
    "Öğrenci Adı",
    "Telefon",
    "Velisinin Adı",
    "Velisinin Telefonu",
  ];

  const sinifTypes = Array.from(
    new Set(siniflar.map((sinif) => sinif.language))
  );

  console.log("currentClass", currentClass);

  return (
    <div className='h-12 md:container'>
      <h1 className='p-2 text-3xl text-primary font-bold'>Sınıf Listem</h1>
      <div className='flex gap-2 my-2 overflow-auto'>
        {siniflar.map((sinif, index) => (
          <Button
            key={index}
            className={`${
              currentClass?.id === sinif.id ? "bg-red-500" : "bg-gray-500"
            } min-w-max `}
            onClick={() => {
              setCurrentClass(sinif);
            }}
          >
            {sinif.name}
          </Button>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-4'>
          {tableHead.map((head, index) => (
            <div
              key={index}
              className='h-12 bg-primary text-white shadow-md pl-2 font-bold flex items-center'
            >
              <span className='text-center'>{head}</span>
            </div>
          ))}
        </div>

        {currentClass?.students.map((student, index) => {
          return (
            <div
              key={index}
              className='h-12 grid grid-cols-4 bg-gray-200 shadow-md hover:bg-gray-400 pl-2 font-bold rounded-md flex items-center'
            >
              <span>{student.name + student.surname}</span>
              <span>{student.parentsPhone}</span>
              <span>{student.parentsName}</span>
              <span>{student.parentsPhone}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SiniflarPage;
