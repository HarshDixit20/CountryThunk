import './App.css';
import { useEffect } from 'react';
import Country from './components/Country';
import { useDispatch, useSelector } from 'react-redux';
import { addCountry } from './redux/action/country.action';

function App() {

  const dispatch = useDispatch();

  let {countries} = useSelector(state => state);

  useEffect(() => {
      dispatch(addCountry())
  }, [])

  return (
    <div className="container">
      <div className='row'>
        {
          countries.length > 0 && countries.map((item, index) => (
            <Country country={item} key={index} />
          ))
        }
      </div>

    </div>
  );
}

export default App;
