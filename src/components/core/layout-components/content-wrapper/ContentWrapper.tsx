import React from "react";

type ContentWrapperProps = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: ContentWrapperProps) {
  return <div className='h-12 md:container'>{children}</div>;
}

export default ContentWrapper;
