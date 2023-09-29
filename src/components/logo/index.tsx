import Image from 'next/image';

import Pitblast from '../../assets/logo_O-Pitblast.svg';

export const Logo = () => {
  return (
    <Image
      className="mt-[133px] mb-[65px]"
      src={Pitblast}
      alt="pitblast_logo"
    />
  );
};
