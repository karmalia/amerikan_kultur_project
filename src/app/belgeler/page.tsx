"use client";
import ContentWrapper from "@/components/core/layout-components/content-wrapper/ContentWrapper";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type Props = {};

function BelgelerPage({}: Props) {
  const [tab, setTab] = useState(0);
  return (
    <ContentWrapper>
      <div className='border flex gap-2'>
        <Button
          variant={tab === 0 ? "destructive" : "default"}
          onClick={() => setTab(0)}
        >
          SINAVLAR
        </Button>
        <Button
          variant={tab === 1 ? "destructive" : "default"}
          onClick={() => setTab(1)}
        >
          RAPORLAR
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default BelgelerPage;
