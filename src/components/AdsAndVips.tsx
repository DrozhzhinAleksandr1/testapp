import React from 'react';
import {View} from 'react-native';
import AdsAndVipsComponents from './AdsAndVipsComponents';

interface IAdsAndVips {
  ads: [key: any];
  vips: [key: any];
}

const AdsAndVips = ({
  adsAndVips,
  index,
}: {
  adsAndVips: IAdsAndVips;
  index: number;
}) => {
  return (
    <View>
      {adsAndVips?.vips && (
        <AdsAndVipsComponents
          components={adsAndVips.vips}
          title="Vips"
          key={`AdsAndVipsComponents Vips${index}`}
        />
      )}
      {adsAndVips?.ads && (
        <AdsAndVipsComponents
          components={adsAndVips.ads}
          title="Default"
          key={`AdsAndVipsComponents Default${index}`}
        />
      )}
    </View>
  );
};

export default AdsAndVips;
