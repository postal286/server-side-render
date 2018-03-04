import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Input } from 'reactstrap';


class DateWrapper extends React.Component {
  state = {
    startDate: moment(),
    customDate: false,
  };

  handleChange = (date) => {
    const { onChange } = this.props.input;
    const formatedDate = date.format();

    this.setState({ startDate: date });
    onChange(formatedDate);
  };

  onCheckboxChange = () => {
    this.setState({ customDate: !this.state.customDate }, () => {
      if (!this.state.customDate) {
        this.handleChange(moment());
      }
    });
  };

  render() {
    return (
      <div>
        <div className="mb-3">
          <Input
            type="checkbox"
            onChange={this.onCheckboxChange}
          />
          {' Choose Custom Date (Default - Current Date)'}
        </div>
        <div className="mb-3">
          {this.state.customDate &&
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          }
        </div>
      </div>
    );
  }
}

export default DateWrapper;

