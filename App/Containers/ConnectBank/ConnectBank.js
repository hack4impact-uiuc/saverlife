import React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';

import Style from './ConnectBankStyle';
import HeaderImage from '../../Assets/Images/connect-bank.png';

class ConnectBank extends React.Component {
    render() {
        return(
            <SafeAreaView style={ {flex: 1} }>
                <Image source={HeaderImage} />
                <View style={Style.connectBankContainer}>
                    <Text style={Style.connectSavingsText}>
                        Let's connect your savings account to skip this process next time.
                    </Text>
                    <Text style={Style.connectDescription}>
                        Link the account you want to save in, and we'll track your savings and reward you with points.
                    </Text>  
                    <View style={Style.buttonContainer}>
                        <TouchableOpacity style={Style.button}>
                            <Text>Bank Account</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity style={Style.button}>
                            <Text>Pay Pal</Text>
                        </TouchableOpacity>  
                    </View>
                    <TouchableOpacity style={Style.laterButton}>
                        <Text style={Style.askLater}>
                            Ask me later
                        </Text>
                    </TouchableOpacity>
                </View>               
            </SafeAreaView>
        );
    }
}

export default ConnectBank;
