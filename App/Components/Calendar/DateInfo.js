import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DateInfo extends Component {
    constructor(props) {
        super(props);
    }

    // UTC Timestamp
    timestampToString() {
        console.log(Math.floor(this.props.timestamp / 1000));
        let date = new Date(this.props.timestamp);
        let month = this.monthToString(date);
        
        let day = this.dayToString(date);

        return month + " " + day;
    }

    monthToString(date) {
        switch (date.getMonth()) {
            case 0: return "January";
            case 1: return "Feburary";
            case 2: return "March";
            case 3: return "April";
            case 4: return "May";
            case 5: return "June";
            case 6: return "July";
            case 7: return "August";
            case 8: return "September";
            case 9: return "October";
            case 10: return "November";
        }

        return "December";
    }

    dayToString(date) {
        let day = date.getDate() + 1;

        switch (day % 10) {
            case 1:
                return day + "st";
            
            case 2:
                return day + "nd";
            
            case 3:
                return day + "rd";
        }

        return day + "th";
    }

    render() {
        return (
        <View>
            <Text>{this.timestampToString()}</Text>
        </View>
        );
    }
}