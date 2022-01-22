import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { Colors } from '../constants';

const Icon = ({ name }) => {

    const { isDarkMode } = useSelector(state => state.SystemReducer)


    return <FontAwesome5 name={name} color={isDarkMode ? "red" : "yellow"} size={25} />



};

export default Icon;


