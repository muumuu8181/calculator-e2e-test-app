import React, { useState } from 'react';
import { Button } from '../components/Button';
import { formatMessage } from '@shared/utils/format';
import { APP_NAME } from '@shared/constants';
import type { Theme } from '@shared/types';

export function HomePage() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(`Welcome to ${APP_NAME}!`);
  const [theme] = useState<Theme>('light');

  const handleClick = () => {
    setCount(prev => prev + 1);
    setMessage(formatMessage(`Button clicked ${count + 1} times`));
  };

  return (
    <div style={{ padding: '20px', background: theme === 'light' ? '#fff' : '#333' }}>
      <h2>Home Page</h2>
      <p>{message}</p>
      <Button onClick={handleClick}>
        Count: {count}
      </Button>
    </div>
  );
}