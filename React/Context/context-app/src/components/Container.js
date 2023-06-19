import Button from './Button';
import Header from './Header';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Profile from './Profile';
function Container() {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme }`}>
    <Header/>
    <hr/>
    <Button/>
    <Profile/>
    </div>
  
  )
}

export default Container