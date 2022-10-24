import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {useAuth} from '../../../context/auth';
import {CardWarning} from '../../../components/Lists/warningListItem';
import {Loading} from '../../../components/Loading';
import {endpointsWarnings} from '../../../services/warnings';
import AsyncStorage from '@react-native-community/async-storage';

const PER_PAGE = 5;

function Warnings() {
   const [warningsData, setWarningsData] = useState([]);
   const [page, setPage] = useState(1);

   const {token} = useAuth();
   useEffect(() => {
      async function onHandle() {
         const response = await handleWarningsData();
         setWarningsData(response);
      }
      onHandle();
   }, []);

   async function handleWarningsData() {
      const response = await endpointsWarnings.getAll(page, PER_PAGE);

      setPage(page + 1);

      return response;
   }

   async function endPageInfinity() {
      setWarningsData(warningsData.concat(await handleWarningsData()));
   }

   return (
      <>
         <View
            style={{
               backgroundColor: '#000',
               flex: 1,
            }}>
            <FlatList
               contentContainerStyle={{
                  paddingBottom: 80,
                  backgroundColor: '#000',
               }}
               data={warningsData}
               renderItem={CardWarning}
               onEndReached={endPageInfinity}
               onEndReachedThreshold={0.1}
               ListFooterComponent={Loading}
               token={token}
            />
         </View>
      </>
   );
}

export default Warnings;
