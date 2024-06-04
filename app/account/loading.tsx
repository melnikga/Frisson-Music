'use client';

import { BounceLoader } from 'react-spinners';

import Box from '@/components/Box';

const Loading = () => {
  return (
    <Box className='h-full flex items-center justify-center'>
      <BounceLoader color='white' size={40} />
    </Box>
  );
};

export default Loading;