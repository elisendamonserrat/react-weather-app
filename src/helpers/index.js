import { format } from 'date-fns'

export const currentDate = () => {
    return format(new Date(), 'dd MMMM');
}

export const mathRoundTemperature = (temperature) => {
    return Math.round(temperature);
}