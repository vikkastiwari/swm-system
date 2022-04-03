import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        // height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign:'center'
      }}>
      <BeatLoader color='#1b55e2' />
    </div>
  );
};

export default Loader;
