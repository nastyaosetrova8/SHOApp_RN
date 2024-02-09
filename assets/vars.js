import {Dimensions} from 'react-native'
const {height, width} = Dimensions.get('window');

const SIZES = {
xSmall: 10,
small: 12,
medium: 16,
Large: 20,
xLarge: 24,
xxLarge: 44,
Height,
width
};

const SHADOWS = {
Small: {
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 2,
},
medium: {
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 5.84,
elevation: 5,
},
};

export {SIZES, SHADOWS};