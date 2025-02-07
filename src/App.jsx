import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [refatch, setRefatch] = useState(false);
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [refatch]);
  return (
    <main>
      <h2>Tours Starter</h2>
      {isLoading && <Loading />}
      {tours.length === 0 ? (
        <div>No tours yet</div>
      ) : (
        <Tours tours={tours} setTours={setTours} setRefatch={setRefatch} />
      )}
    </main>
  );
};
export default App;
