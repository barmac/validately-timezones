import * as moment from 'moment-timezone';
import * as React from 'react';

import SingleTimezone from './SingleTimezone';

export interface Timezone {
  name: string;
  timezone: string;
}

interface TimezoneListProps {
  currentTime: moment.Moment;
}

interface TimezoneListState {
  timezones: Timezone[],
}

const defaultTimezones: Timezone[] = [
  {
    name: 'User',
    timezone: moment.tz.guess(),
  },
  {
    name: 'UTC',
    timezone: 'UTC',
  },
];

export class TimezoneList extends React.Component<TimezoneListProps, TimezoneListState> {
  constructor(props: any) {
    super(props);
    this.listTimezones = this.listTimezones.bind(this);
    this.state = {
      timezones: defaultTimezones,
    };
  }

  public render() {
    return (
      <div>
        {this.listTimezones()}
      </div>
    );
  }

  private listTimezones() {
    return this.state.timezones.map((timezone: Timezone, index: number) => (
      <SingleTimezone {...timezone} currentTime={this.props.currentTime} key={index} /> 
    ));
  }
}
