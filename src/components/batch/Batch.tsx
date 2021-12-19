import React from 'react';

const Batch = () => {
  const [first, setFirst] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [third, setThird] = React.useState(0);
  React.useEffect(() => {
    const exec = setInterval(() => {
      setFirst(first + 1);
      setSecond(second + 2);
      setThird(third + 3);
    }, 3000);
    return () => clearInterval(exec);
  }, [first]);

  console.log('rendering');
  return <></>;
};

export default Batch;
