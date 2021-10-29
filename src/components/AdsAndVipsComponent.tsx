import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from 'react-native-navigation-hooks';
import Moment from 'moment';
import 'moment/locale/ru';

const window = Dimensions.get('window');
const {width} = window;
const componentWidth = width / 2 - 10;
const componentHeight = (componentWidth / 16) * 9;

const AdsAndVipsComponent = ({entity}: {entity: any}) => {
  const {push} = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        push('DetailScreen', {
          entity,
        });
      }}>
      <FastImage
        resizeMode={'cover'}
        style={{
          width: componentWidth,
          height: componentHeight,
        }}
        source={{uri: entity.photo}}
      />
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: componentWidth,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    overflow: 'hidden',
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
});

export default AdsAndVipsComponent;
