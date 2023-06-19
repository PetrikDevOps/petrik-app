import React, { useState, useEffect } from 'react';

const ScrollableComponent = () => {
  const [selectedValue1, setSelectedValue1] = useState<number | ''>(9);
  const [selectedValue2, setSelectedValue2] = useState<string | ''>('ny');

  const handleScroll1 = (e) => {
    console.log(e.target);
    const scrollContainer = e.target;
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const containerHeight = scrollContainer.clientHeight;
    const itemHeight = scrollHeight / data1.length;
    const selectedItemIndex = Math.floor(scrollTop / (itemHeight-70));
    const selectedValue = data1[selectedItemIndex];
    
    // Ellenőrizzük, hogy a scroll a legalsó pozícióban van-e
    if (scrollTop + containerHeight === scrollHeight) {
      setSelectedValue1(data1[data1.length - 1]);
    } else {
      setSelectedValue1(selectedValue);
    }
  };

  const handleScroll2 = (e) => {
    const scrollContainer = e.target;
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const containerHeight = scrollContainer.clientHeight;
    const itemHeight = scrollHeight / data2.length;
    const selectedItemIndex = Math.floor(scrollTop / (itemHeight-50));
    const selectedValue = data2[selectedItemIndex];
    
    // Ellenőrizzük, hogy a scroll a legalsó pozícióban van-e
    if (scrollTop + containerHeight === scrollHeight) {
      setSelectedValue2(data2[data2.length - 1]);
    } else {
      setSelectedValue2(selectedValue);
    }
  };

  
  const data1 = [9, 10, 11, 12];
  const data2 = ['ny', 'kny', 'a', 'b', 'c', 'd', 'e'];

  return (
    <div>
        <div>{}</div>
<div style={{ display: 'flex', height: '10vh' }}>
      <div
        style={{
          flex: 1,
          overflowY: 'scroll',
          marginRight: '5px',
          paddingBottom: '30vh',
          paddingTop: '10vh',
        }}
        onScroll={handleScroll1}
      >
        {data1.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '2vh',
              background:
                selectedValue1 === item ? 'lightblue' : 'transparent',
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        style={{
          flex: 1,
          overflowY: 'scroll',
          marginLeft: '5px',
          paddingBottom: '30vh',
          paddingTop: '10vh',
        }}
        onScroll={handleScroll2}
      >
        {data2.map((item, index) => (
          <div
            key={index}
            style={{
                padding: '2vh',
              background:
                selectedValue2 === item ? 'lightblue' : 'transparent',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ScrollableComponent;
