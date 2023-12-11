import ContentWrapper from "@/components/core/layout-components/content-wrapper/ContentWrapper";
import WeeklyScheduler from "@/components/features/dashboard/weekly-scheduler";
import WriteReport from "@/components/features/report-page/write-report/write-report";
import React from "react";

type Props = {};

function DashboardPage({}: Props) {
  return (
    <ContentWrapper>
      <div className='h-52 grid grid-cols-2 gap-2'>
        {/* <WeeklyScheduler /> */}
      </div>
    </ContentWrapper>
  );
}

export default DashboardPage;
