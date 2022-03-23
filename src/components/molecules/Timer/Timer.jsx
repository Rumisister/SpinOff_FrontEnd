import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { TextButton } from '../../atoms';
import { textButtonStyle } from './styles';

function Timer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState(endTime - new Date().getTime());
  console.log(timeLeft);
  console.log('@@@');
  const calculateTime = () => {
    return endTime - new Date().getTime();
  };

  useEffect(() => {
    let mounted = true;
    let timerId = setInterval(() => {
      if (mounted) setTimeLeft(calculateTime());
    }, 1000);
    return () => {
      mounted = false;
      clearInterval(timerId);
    };
  }, []);
  return (
    <TextButton Style={textButtonStyle}>
      {dayjs(timeLeft).format('mm:ss')}
    </TextButton>
  );
}

Timer.propTypes = {
  endTime: propTypes.number,
};

export default React.memo(Timer);
