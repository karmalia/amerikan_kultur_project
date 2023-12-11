"use client";
import ContentWrapper from "@/components/core/layout-components/content-wrapper/ContentWrapper";
import ReportsTable from "@/components/features/report-page/reports-table/reports-table";
import WriteReport from "@/components/features/report-page/write-report/write-report";
import React, { useState } from "react";

type Props = {};

type TReport = {
  adi: string;
  soyadi: string;
  grammer: string;
  vocabulary: string;
  pronunciation: string;
  comprehension: string;
  homework: string;
  participation: string;
  comment: string;
};

function ReportPage({}: Props) {
  const [reports, setReports] = useState<TReport[]>([]);

  return (
    <ContentWrapper>
      <div className='grid grid-cols-3 border-2 h-auto'>
        <h1 className='text-3xl col-span-3 pl-4 font-bold tracking-wide py-4'>
          Rapor oluşturma sayfası
        </h1>

        <WriteReport setReports={setReports} reports={reports} />

        <ReportsTable setReports={setReports} reports={reports} />
      </div>
    </ContentWrapper>
  );
}

export default ReportPage;
