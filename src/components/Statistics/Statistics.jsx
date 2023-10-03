import {StatisticList, StatisticItems, StatisticsText} from './Statistics.styled'

export const Statistic =({good, bad, neutral, total, positivePercentage}) =>{
    return <StatisticList>
                <StatisticItems><StatisticsText>Good:</StatisticsText> {good}</StatisticItems>
                <StatisticItems><StatisticsText>Neutral:</StatisticsText> {neutral}</StatisticItems>
                <StatisticItems><StatisticsText>Bad</StatisticsText>: {bad}</StatisticItems>
                <StatisticItems><StatisticsText>Total:</StatisticsText> {total}</StatisticItems>
                <StatisticItems><StatisticsText>Positive feedback:</StatisticsText> {positivePercentage}%</StatisticItems>
            </StatisticList>
}