import { useState } from 'react';
import Header from './components/Header';
import SetAllButtonsContainer from './components/SetAllButtonsContainer';
import EmailList from './components/EmailList';
import INITIAL_STATE from './data/initialState'

function App() {
  const [emailList, setEmailList] = useState(INITIAL_STATE);

  return (
    <div id="App" className="flex flex-col gap-10">
      <Header />
      <SetAllButtonsContainer { ...{ emailList, setEmailList } } />
      <EmailList { ...{ emailList, setEmailList } } />
    </div>
  );
};

export default App;
