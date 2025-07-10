import { DayPicker, type DateRange } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import s from './DatePicker.module.scss'
import { enGB } from 'date-fns/locale'

type CalendarProps = {
  value?: DateRange | undefined
  onChange?: (range: DateRange | undefined) => void
}

export const Calendar = ({ value, onChange, ...rest }: CalendarProps) => {

  const modifiers = {
    weekend: (date: Date) => [0, 6].includes(date.getDay())
  }

  return (
    <DayPicker
      className={s.datePicker__calendar}
      classNames={{
        caption_label: s.captionLabel,
        day: s.day,
        weekdays: s.weekdays,
        weekday: s.weekday,
        nav_button: s.navButton,
        chevron: s.chevron
      }}
      modifiersClassNames={{
        selected: s.selected,
        today: s.today,
        weekend: s.weekend,
        range_start: s.rangeStart,
        range_end: s.rangeEnd
      }}
      modifiers={modifiers}
      locale={enGB}
      animate
      fixedWeeks
      showOutsideDays
      mode="range"
      selected={value}
      onSelect={onChange}
      required
      disabled={{ before: new Date() }}
      {...rest}
    />
  )

}