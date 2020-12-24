import React from 'react';

const styles = {
  minHeight: 'calc(100vh - 179px)',
  padding: '80px 0 80px 0',
};

const Wrapper = ({ children }) => {
  return (
    <section className="wrapper" style={styles}>
      {children}
    </section>
  );
};

export default Wrapper;
