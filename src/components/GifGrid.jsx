import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  /* const [gifs, setGifs] = useState([]);
  
  */
  const { data: gifs } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      <div className='card-grid'>
        {gifs.map(gif => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
