import React from 'react';
import {FormClient} from '../../../../components/forms';
import {useAuth} from '../../../../context/auth';

export default function Update() {
   const {user} = useAuth();
   return (
      <FormClient
         uri={'/update'}
         object={{
            username: user.username,
            password: '',
            email: user.email,
            city: user.city,
            state: user.state,
         }}
         method={'PUT'}
         textButtonProps={'Atualizar sua conta'}
      />
   );
}
