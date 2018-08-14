import * as moment from 'moment-timezone';
import * as React from 'react';

import TimezoneList from './TimezoneList';

interface AppState {
  currentTime: moment.Moment;
}

const SECOND = 1000;

class App extends React.Component<{}, AppState> {
  private clock: NodeJS.Timer;

  constructor(props: any) {
    super(props);
    this.state = {
      currentTime: moment(),
    };
  }

  public render() {
    return (
      <div>
        <h1>Timezone Converter</h1>      
        <TimezoneList currentTime={this.state.currentTime} />
      </div>
    );
  }

  public componentDidMount() {
    this.clock = setInterval(
      () => this.setState((state: AppState) => ({ currentTime: moment(this.state.currentTime.clone().add(SECOND)) })),
      SECOND
    );
  }

  public componentWillUnmount() {
    clearInterval(this.clock);
  }
}

export default App;
