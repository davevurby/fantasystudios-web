import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(timezone)
dayjs.extend(utc)

export interface TimesProps {
    zone: 'Europe/Prague' | 'America/New_York' | 'autoDetect'
}

// render time in the given zone
export const Times = ({ zone }: TimesProps) => {
    const now = zone === 'autoDetect' ? dayjs() : dayjs().tz(zone);
    const time = now.format('HH:mm');
    
    return (
        <span>{
            time
        }</span>
    )
}