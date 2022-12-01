import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import { useAuth } from '../../../context/auth';
import { CardWarning } from '../../../components/Lists/warningListItem';
import { Loading } from '../../../components/Loading';
import { endpointsWarnings } from '../../../services/warnings';
import Feather from 'react-native-vector-icons/Feather'
import { SpeedDial } from '@rneui/themed'


function Warnings() {
   const PER_PAGE = 5;
   const [warningsData, setWarningsData] = useState([]);
   const [page, setPage] = useState(1);
   const [connnection, setConnection] = useState(true);
   const [dataPageExists, setDataPageExists] = useState(true);

   const { token } = useAuth();
   useEffect(() => {
      (async () => {

         const res = await handleWarningsData();
         if (res?.message) return;
         if (res?.length == 0) return;

         setWarningsData(res);
         setConnection(false);

      })()
   }, []);

   async function handleWarningsData() {
      const response = await endpointsWarnings.getAll(page, PER_PAGE);

      if (response.length != 0) {
         setPage(page + 1);
      }

      return response;
   }

   async function endPageInfinity() {
      const res = await handleWarningsData()
      if (res.length == 0) setDataPageExists(false)
      setWarningsData(warningsData.concat(res));
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
               renderItem={(object) => <CardWarning {...object} token={token} />}
               onEndReached={dataPageExists ? endPageInfinity : null}
               onEndReachedThreshold={dataPageExists ? 0.1 : null}
               ListFooterComponent={dataPageExists ? Loading : null}
            />

         </View>
      </>
   );
}

export default Warnings;
