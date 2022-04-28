import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [allDrivers, setAllDrivers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const limit = 5;
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=30').then((res) => {
      setAllDrivers(res.data.results);
      setDrivers(res.data.results);
    })
  }, [])

  const onFilterClick = () => {
    let arr = allDrivers.filter((el) => el.name.first.toLowerCase().includes(filter.toLowerCase()))
    console.log(arr)
    setDrivers(arr);
    setPage(1);
  }

  const onPrevClick = () => {
    setPage((page) => (page - 1));
  }

  const onNextClick = () => {
    setPage((page) => (page + 1));
  }

  const isPrevDisabled = () => {
    if (page === 1) {
      return true
    } 
    return false
  }

  const isNextDisabled = () => {
    if (page >= drivers.length / limit) {
      return true
    } 
    return false
  }

  const renderDriver = () => {
    let start = (page - 1) * limit;
    let end = ((page - 1) * limit) + limit;
    let slicedDrivers = drivers.slice(start, end);

    return slicedDrivers.map((el) => {
      return (
        <div key={el.email}>
          <ul>
            <li>
              Driver ID:
              {el.id.value ? el.id.value : '-'}
            </li>
            {/* <li>
              <Image
                src={el.picture.thumbnail}
                alt={`${el.name.first} ${el.name.last}`} 
                width={200}
                height={200}
              />
            </li> */}
            <li>
              Nama Driver:
              {`${el.name.first} ${el.name.last}`} 
            </li>
            <li>
              Telepon:
              {el.phone}
            </li>
            <li>
              Email:
              {el.email}
            </li>
            <li>
              Tanggal Lahir:
              {el.registered.date}
            </li>
          </ul>
        </div>
      )
    })
  }

  return (
    <>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Posts CRUD App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center my-4">
          Driver Management
        </h1>
        <input type="text" onChange={e => setFilter(e.target.value)} />
        <button onClick={() => onFilterClick()}>Filter</button>
        {renderDriver()}
        <button disabled={isPrevDisabled()} onClick={() => onPrevClick()}>Prev</button>
        <button disabled={isNextDisabled()} onClick={() => onNextClick()}>Next</button>
      </main>
    </>
  )
}
