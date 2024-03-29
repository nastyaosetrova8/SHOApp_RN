import {Dimensions} from 'react-native'
const {height, width} = Dimensions.get('window');

const SIZE = {
height,
width
};

const SHADOW = {
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

export {SIZE, SHADOW};