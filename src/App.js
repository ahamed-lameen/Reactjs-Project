import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './view/common/header/header';
import Completed from './view/pages/completed/completed';
import Dashboard from './view/pages/dashboard/dashboard';
import InProgress from './view/pages/inProgress/inProgress';
import Inspection from './view/pages/inspection/inspection';
import ReadyToSend from './view/pages/readyToSend/readyToSend';
import Reports from './view/pages/reports/reports';
import SideBar from './view/pages/sideBar/sideBar';
import Customers from './view/pages/customers/customers';
import CreateNewCustomer from './view/pages/createNewCustomer/createNewCustomer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='row'>
          <div className='cell-w220'>
            <SideBar />
          </div>
          <div className='cell-w1129 inspection-box'>
            <Routes>
              <Route path='/' element={<Dashboard /> } />    
              <Route path='inspection' element={<Inspection />} />
              <Route path='inprogress' element={<InProgress />} />
              <Route path='readytosend' element={<ReadyToSend />} />
              <Route path='completed' element={<Completed />} />
              <Route path='reports' element={<Reports />} />
              <Route path='customers' element={<Customers />} />
              <Route path='createNewCustomer' element={<CreateNewCustomer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;