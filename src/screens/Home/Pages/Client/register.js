import React from 'react';
import {FormClient} from '../../../../components/forms';

export default function Register({navigation}) {
   return (
      <FormClient
         uri={'/register'}
         object={{
            username: '',
            password: '',
            email: '',
            city: '',
            state: '',
         }}
         navigation={navigation}
         method={'POST'}
         textButtonProps={'Registrar novo usuario'}
      />
   );
}
