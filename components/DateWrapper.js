import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Input, Label } from 'reactstrap';
import propTypes from 'prop-types';

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
    const { id } = this.props;
    return (
      <div>
        <div className="mb-3">
          <Input
            id={id}
            type="checkbox"
            onChange={this.onCheckboxChange}
          />
          <Label htmlFor={id}>{' Choose Custom Date (Default - Current Date)'}</Label>
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

DateWrapper.propTypes = {
  id: propTypes.string,
};

export default DateWrapper;
