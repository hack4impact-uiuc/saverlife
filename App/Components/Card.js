import React, { Component } from 'react';
import { View } from 'react-native';
import Style from './CardStyle.js';

const card = (props) => (
    <View style={[Style.card, props.style]}>
        {props.children}
    </View>
);

export default card;