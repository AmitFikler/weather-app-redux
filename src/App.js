import DropDown from './components/DropDown';
import Weather from './components/Weather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: 'RESET' });
    } else {
      return;
    }
  });

  return (
    <div className="App">
      <ToastContainer />
      <h1>weather app</h1>
      <DropDown />
      <Weather />
    </div>
  );
}

export default App;
