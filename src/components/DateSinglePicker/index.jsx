import { useState } from 'react';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import moment from 'moment';

import { DateSinglePickerContainer } from './styles';

// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/pt-br';


const DateSinglePicker = (props) => {
    // const [date, setDate] = useState(null);
    const [focused, setFocused] = useState(false);

    return(
        <DateSinglePickerContainer>
            <SingleDatePicker
                id="date_input"
                date={props.date}
                focused={focused}
                onDateChange={date => {
                    props.setDate(date);
                    props.onChange(date);
                }}
                onFocusChange={({focused}) => setFocused(focused)}
                placeholder="Data de aquisição"
                isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
                displayFormat="DD/MM/YYYY"
                numberOfMonths={1}
            />
        </DateSinglePickerContainer>
    )
}

export default DateSinglePicker;