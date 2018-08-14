import * as moment from 'moment-timezone';
import * as React from 'react';

interface SingleTimezoneProps {
  name: string;
  timezone: string;
  currentTime: moment.Moment;
}

export class SingleTimezone extends React.Component<SingleTimezoneProps> {
  constructor(props: any) {
    super(props);
    this.getTime = this.getTime.bind(this);
  }

  public render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.getTime()}</div>
      </div>
    );
  }

  private getTime(): string {
    return moment.tz(this.props.currentTime, this.props.timezone).toString();
  }
}
