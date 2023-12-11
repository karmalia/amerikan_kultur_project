import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

type Props = {
  setReports: React.Dispatch<React.SetStateAction<any[]>>;
  reports: any[];
};

function ReportsTable({ setReports, reports }: Props) {
  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  const TableHeaders = [
    "Adı Soyadı",
    "Grammer",
    "Vocabulary",
    "Pronunciation",
    "Comprehension",
    "Homework",
    "Participation",
  ];

  console.log("reports: ", reports);

  return (
    <div className='col-span-2'>
      <Table ref={printRef}>
        <TableCaption className='py-4'>11.12.2023 Teens B1 Raporu</TableCaption>
        <TableHeader className='bg-primary '>
          <TableRow>
            {TableHeaders.map((header, index) => (
              <TableHead className='text-white' key={index}>
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports?.map((report, index) => (
            <>
              <TableRow
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
              >
                <TableCell>{`${report.adi + " " + report.soyadi}`}</TableCell>
                <TableCell>{report.grammer}</TableCell>
                <TableCell>{report.vocabulary}</TableCell>
                <TableCell>{report.pronunciation}</TableCell>
                <TableCell>{report.comprehension}</TableCell>
                <TableCell>{report.homework}</TableCell>
                <TableCell>{report.participation}</TableCell>
              </TableRow>
              <TableRow
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
              >
                <TableCell colSpan={7}>
                  <span className='font-bold'>Comment: </span>
                  {report.comment}
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
      {reports?.length > 0 && (
        <Button onClick={handleDownloadPdf}>PDF OLARAK AL</Button>
      )}
    </div>
  );
}

export default ReportsTable;
