import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import styled from 'styled-components/native';

function FormRegister() {
  const [ClientValueStateForm, setClientVlueStateForm] = useState({
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
  });

  return (
    <View>
      <View>
        <Text>Username</Text>
        <TextInput
          placeholder="Insira o username"
          value={ClientValueStateForm.username}
          onChange={({ currentTarget }) => {
            setClientVlueStateForm({
              ...ClientValueStateForm,
              username: currentTarget.username,
            });
          }}
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Insira o email"
          value={ClientValueStateForm.email}
          onChange={({ currentTarget }) => {
            setClientVlueStateForm({
              ...ClientValueStateForm,
              email: currentTarget.email,
            });
          }}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          placeholder="coloque sua senha"
          value={ClientValueStateForm.password}
          onChange={({ currentTarget }) => {
            setClientVlueStateForm({
              ...ClientValueStateForm,
              password: currentTarget.password,
            });
          }}
        />
      </View>
      <View>
        <Text>City</Text>
        <TextInput
          placeholder="Insira sua cidade"
          value={ClientValueStateForm.city}
          onChange={({ currentTarget }) => {
            setClientVlueStateForm({
              ...ClientValueStateForm,
              city: currentTarget.city,
            });
          }}
        />
      </View>
      <View>
        <Text>State</Text>
        <TextInput
          placeholder="Insira seu estado"
          value={ClientValueStateForm.state}
          onChange={({ currentTarget }) => {
            setClientVlueStateForm({
              ...ClientValueStateForm,
              state: currentTarget.state,
            });
          }}
        />
      </View>
    </View>
  );
}

export const Container = styled.View`
  Text {
    color: '#000';
  }
`;
