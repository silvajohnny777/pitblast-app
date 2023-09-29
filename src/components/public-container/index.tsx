import React, { ReactNode } from 'react';

interface PublicContainerProps {
  children: ReactNode; // This prop accepts any valid JSX children
}

const PublicContainer: React.FC<PublicContainerProps> = ({ children }) => {
  return (
    <div className="h-full bg-hero bg-no-repeat bg-cover flex items-center justify-center">
      <div className="bg-white opacity-100 shadow-[0px_12px_24px_#00000029] backdrop-blur w-[576px] h-[932px] my-[74px] rounded-[24px] flex flex-col items-center max-w-[90%]">
        {children}
      </div>
    </div>
  );
};

export default PublicContainer;
