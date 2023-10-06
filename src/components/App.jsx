import { Section } from "./Section/Section";
import { Statistic } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { MainWrap } from "./App.styled";
import { useState } from "react";
const App = ()=>{

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

        const countTotalFeedback = (good, neutral, bad)=>{
       return good + neutral + bad
      }

      const total = countTotalFeedback(good, neutral, bad);

      const countPositiveFeedbackPercentage = (goodOnes)=>{
        const result = Math.round(goodOnes * 100 / total)
        return result 
      }

      const positivePercentage = countPositiveFeedbackPercentage(good);

      const onLeavefeedback = (option) => {
     
        switch (option) {
          case 'good':
            setGood((prevGood) => prevGood + 1);
            break;
          case 'neutral':
            setNeutral((prevNeutral) => prevNeutral + 1);
            break;
          case 'bad':
            setBad((prevBad) => prevBad + 1);
            break;
          default:
            console.error(`Invalid option: ${option}`);
        }
      }
  return (
    <MainWrap>
    <Section title={'Please leave feedback'}>
    <FeedbackOptions options={Object.keys({good, neutral, bad})} onLeavefeedback={onLeavefeedback}/>
    </Section>
    <Section title={'Statistic'}>
      {total === 0 ? <Notification Textmessage="There is no feedback"/> :
    <Statistic 
    total={total}
    positivePercentage={positivePercentage}
    good={good} bad={bad} neutral={neutral}/>}</Section>
    </MainWrap>
  );
};


export default App