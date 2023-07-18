import React from 'react';
import { Svg, G, Path } from 'react-native-svg';

interface HomeIconProps {
  focused: boolean;
}

export const HomeIcon = ({ focused }: HomeIconProps) => {
  const iconColor = focused ? 'blue' : 'gray';

  return (
    <Svg height="24" width="24" viewBox="0 0 24 24">
      <G transform="translate(0 -1028.4)">
        <Path
          d="m8.5 1032.4c-3.0376 0-5.5 2.5-5.5 5.5 0 1.6 0.6167 2.9 1.5938 3.9 0.1337 0.2 0.2591 0.3 0.4062 0.5l7 7.1 7-7.1 0.344-0.4c1.013-1 1.656-2.4 1.656-4 0-3-2.462-5.5-5.5-5.5-1.329 0-2.549 0.4-3.5 1.2-0.951-0.8-2.1711-1.2-3.5-1.2z"
          fill={iconColor}
        />
        <Path
          d="m8.8889 1033.4c-2.7001 0-4.8889 2.2-4.8889 4.9 0 1.3 0.5481 2.5 1.4167 3.4 0.1188 0.2 0.2303 0.3 0.3611 0.4l6.2222 6.3 6.222-6.3 0.306-0.3c0.901-0.9 1.472-2.1 1.472-3.5 0-2.7-2.189-4.9-4.889-4.9-1.181 0-2.266 0.4-3.111 1.1-0.845-0.7-1.93-1.1-3.1111-1.1z"
          fill={iconColor}
        />
      </G>
    </Svg>
  );
};

// #c0392b, #e74c3c
