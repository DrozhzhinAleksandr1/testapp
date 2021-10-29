import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import AdsAndVips from '../components/AdsAndVips';

const BrowseScreen = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  const page = useRef(0);

  const loadData = useCallback(async () => {
    try {
      const requestObj: any = {
        method: 'get',
        url: `https://ru.turbo.az/api/v1/autos`,
        headers: {Accept: 'application/json'},
        params: `?cursor=${page.current}`,
      };
      const response = await axios(requestObj);

      if (response.status === 200) {
        page.current = page.current + 1;
        setData([...data, {vips: response.data.vips, ads: response.data.ads}]);
      }
    } catch (e) {
      console.warn(e);
    }
  }, [data]);

  useEffect(() => {
    loadData();
  }, []);

  const renderItem = useCallback(({item, index}) => {
    return (
      <AdsAndVips adsAndVips={item} index={index} key={`adsAndVips${index}`} />
    );
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
        onEndReachedThreshold={1}
        onEndReached={loadData}
      />
    </View>
  );
};

BrowseScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  contentContainerStyle: {minHeight: '100%', paddingTop: 45, paddingBottom: 45},
});

export default BrowseScreen;
