import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {


  return (
    <div className='search'>      
        <input type="text" placeholder="Search...." class="rounded-7" 
           
        />
        <SearchIcon />
    </div> 

  )
}
