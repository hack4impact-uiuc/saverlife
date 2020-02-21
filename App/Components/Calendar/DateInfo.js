import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './CalendarStyle';

export default class DateInfo extends Component {
    constructor(props) {
        super(props);
    }

    // UTC Timestamp
    timestampToWeek() {
        console.log(this.props.timestamp);
        const msInDay = 86400000;
        
        let currentDate = new Date(this.props.timestamp);
        let dayOfWeek = (currentDate.getDay() + 1) % 7;

        let weekStart = new Date((currentDate.getTime() - (dayOfWeek * msInDay)));
        let weekEnd = new Date(currentDate.getTime() + msInDay * (6 - dayOfWeek))

        let startMonth = this.monthToString(weekStart);
        let startDay = this.dayToString(weekStart);
        let endMonth = this.monthToString(weekEnd);
        let endDay = this.dayToString(weekEnd);

        return startMonth + " " + startDay + " - " + endMonth + " " + endDay;
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

        if (day >= 10 && day <= 20)
            return day + "th";

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
        <View style={styles.weekInfoContainer}>
            <View style={{alignSelf: 'flex-start', flex:1}}>
                <Text style={styles.weekHeader}>Week Summary</Text>
                <Text style={styles.weekFooter}>{this.timestampToWeek()}</Text>
            </View>

            <Button style={{flex: 1, alignSelf: 'flex-end'}} title="Add New"/>
        </View>
        );
    }
}