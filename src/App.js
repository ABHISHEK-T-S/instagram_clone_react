import React from 'react';
import './App.css';
import Header from './Header';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts name = 'varun' caption='wow amazing' imageUrl='https://images.pexels.com/photos/4746774/pexels-photo-4746774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      <Posts  name= 'dhavan' caption='wow amazing good for nothing to see no money why are' imageUrl='https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600' />
      <Posts name= 'Shikshar' caption=' no money why are' imageUrl='https://images.pexels.com/photos/2734404/pexels-photo-2734404.jpeg?auto=compress&cs=tinysrgb&w=600' />
      <Posts name= 'kannan' caption='wow amazing good for nomoney why are' imageUrl='https://images.pexels.com/photos/2947924/pexels-photo-2947924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600' />
      
      


      {/* header */}
      {/* posts */}
    </div>
  );
}

export default App;
