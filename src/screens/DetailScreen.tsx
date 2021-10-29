import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Moment from 'moment';
import 'moment/locale/ru';

const window = Dimensions.get('window');
const {width} = window;
const componentHeight = (width / 16) * 9;

const DetailScreen = ({entity}: {entity: any}) => {
  const renderItem = useCallback(({item, index}) => {
    return (
      <FastImage
        resizeMode={'cover'}
        style={{
          width,
          height: componentHeight,
        }}
        source={{uri: item}}
        key={`photo ${entity.id} ${index}`}
      />
    );
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        horizontal={true}
        data={entity.photos}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
        style={{height: componentHeight, maxHeight: componentHeight}}
      />
      <ScrollView>
        <Text numberOfLines={1} style={styles.textName}>
          {entity.name}
        </Text>
        <Text numberOfLines={1} style={styles.textPrice}>
          {entity.price} {entity.currency}
        </Text>
        <Text numberOfLines={1} style={styles.textRegionWithDate}>
          {entity.region.name},{' '}
          {Moment(entity.updated_at).locale('de').format('d MMMM YYYY')}
        </Text>
        <Text style={styles.textDescription}>{entity.description}</Text>
        <Text style={styles.textContactName}>{entity.contact.name}</Text>
        <Text style={styles.textPhone}>Phones:</Text>
        {entity.contact.phones.map((phone: any) => {
          return phone && <Text style={styles.textPhoneNumbers}>{phone}</Text>;
        })}
      </ScrollView>
    </View>
  );
};

DetailScreen.options = {
  topBar: {
    title: {
      text: 'Detail',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  contentContainerStyle: {
    flexDirection: 'row',
    height: componentHeight,
    maxHeight: componentHeight,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  textPrice: {
    color: '#4c9a2a',
    fontSize: 16,
    textAlign: 'center',
  },
  textRegionWithDate: {
    color: '#808080',
    fontSize: 12,
    textAlign: 'center',
  },
  textDescription: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  textContactName: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  textPhone: {
    color: '#4c9a2a',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  textPhoneNumbers: {
    color: '#4c9a2a',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default DetailScreen;
