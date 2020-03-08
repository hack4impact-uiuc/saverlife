import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { primaryColor, dateInfoStyles } from './CalendarStyle';
import EventCard from './EventCard'
import { ScrollView } from 'react-native-gesture-handler';
import { monthToString, dayToString } from './../../Util/DateUtils'

export default class DateInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weekStart: new Date(),
            weekEnd: new Date(),
        }

        this.getWeekStart = this.getWeekStart.bind(this);
        this.getWeekEnd = this.getWeekEnd.bind(this);
    }

    // UTC Timestamp
    timestampToWeek() {
        let weekStart = this.getWeekStart();
        let weekEnd = this.getWeekEnd();

        let startMonth = monthToString(weekStart);
        let startDay = dayToString(weekStart);
        let endMonth = monthToString(weekEnd);
        let endDay = dayToString(weekEnd);

        return startMonth + " " + startDay + " - " + endMonth + " " + endDay;
    }

    getWeekStart() {
        let currentDate = new Date(this.props.timestamp);
        let dayOfWeek = (currentDate.getDay() + 1) % 7;
        return new Date((currentDate.getTime() - (dayOfWeek * 86400000)));
    }

    getWeekEnd() {
        let currentDate = new Date(this.props.timestamp);
        let dayOfWeek = (currentDate.getDay() + 1) % 7;
        return new Date(currentDate.getTime() + 86400000 * (6 - dayOfWeek));
    }

    eventInWeek(event) {
        let start = this.getWeekStart();
        let end = this.getWeekEnd();

        console.log("Start Date: " + start.getTime() + " Event: " + event.date + " End: " + end.getTime())

        return (event.date >= start.getTime()) && (event.date <= end.getTime());
    }

    render() {

        return (
        <View>
            <View style={dateInfoStyles.weekInfoContainer}>
                <View>
                    <Text style={dateInfoStyles.weekHeader}>Week Summary</Text>
                    <Text style={dateInfoStyles.weekFooter}>{this.timestampToWeek()}</Text>
                </View>
                <View>
                    <Button color={primaryColor} title="Add new" />
                </View>
            </View>
            
            <View>
                {/* TODO: THIS IS VERY VERY VERY BAD */}
                <ScrollView style={{height: 370}}>
                    {(this.props.events)
                    .filter(event => this.eventInWeek(event))
                    .map(event => (
                    <EventCard
                        key={event.id}
                        name={event.name}
                        cost={event.cost}
                        date={event.date}
                        category={event.category}
                        labels={[]}
                    />
                    ))}
                </ScrollView>
            </View>
        </View>
        );
    }
}