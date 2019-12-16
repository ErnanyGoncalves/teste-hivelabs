import React from 'react';

import Header from './Header';
import EmptyTable from './EmptyTable';
import Table from './Table';
import Form from './Form';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <EmptyTable />
        <Table />
        <Form />
      </div>
    </div>
  );
}



export default App;
