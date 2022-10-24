import React from 'react';
import {Dialog} from '@rneui/themed';
import {colors} from '../../colors';

export const Loading = () => (
   <Dialog.Loading
      loadingStyle={{
         backgroundColor: colors.dark.black_03,
         padding: 3,
         borderRadius: 50,
      }}
      loadingProps={{
         color: colors.dark.Azul_01,
      }}
   />
);
