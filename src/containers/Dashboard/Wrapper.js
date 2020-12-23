import React from 'react';

const styles = {
  minHeight: 'calc(100vh - 179px)',
};

const Wrapper = ({ children }) => {
  return (
    <section className="wrapper" style={styles}>
      {children}
    </section>
  );
};

export default Wrapper;
