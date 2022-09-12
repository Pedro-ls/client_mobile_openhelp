import React from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList, TextInput, View } from 'react-native';

const companies = [
  {
    id: 1,
    name: 'a',
    photo: 'a',
    company_url: 'a',
  },
  {
    id: 2,
    name: 'b',
    photo: 'b',
    company_url: 'b',
  },
  {
    id: 3,
    name: 'c',
    photo: 'c',
    company_url: 'c',
  },
  {
    id: 4,
    name: 'd',
    photo: 'd',
    company_url: 'd',
  },
  {
    id: 5,
    name: 'e',
    photo: 'e',
    company_url: 'e',
  },
];

function SearchCompany() {
  function elementItemFlatListHandler({ item }) {
    return (
      <ListItem
      style={{
         
      }}
        title={item.name}
        subtitle={item.company_url}
        bottomDivider={true}
        chevron
      />
    );
  }
  return (
    <>
      <View>
        <TextInput />
      </View>
      <View>
        <FlatList
          data={companies}
          keyExtractor={(user) => user.id}
          renderItem={elementItemFlatListHandler}
        />
      </View>
    </>
  );
}

export default SearchCompany;
