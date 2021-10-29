import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AdsAndVipsComponent from './AdsAndVipsComponent';

const AdsAndVipsComponents = ({
  components,
  title,
}: {
  components: any[];
  title: string;
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        {components &&
          components.map(component => {
            return (
              <AdsAndVipsComponent
                entity={component}
                key={`AdsAndVipsComponent${component.id}`}
              />
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdsAndVipsComponents;
