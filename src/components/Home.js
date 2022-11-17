import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Card";
import CircularProgress from '@mui/material/CircularProgress';

import SearchArea from "./SearchArea";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log({ searchInput })
  }, [searchInput])
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos?page=1&client_id=qOnSIRDJS0JAOuAOi6shofzd3AjFdbo-sXm7P4tOnh0"
      )
      .then((response) => {
        console.log(response.data);
        setPhotos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      addMoreImages()
    }
  };

  const search = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${searchInput}&page=1&client_id=qOnSIRDJS0JAOuAOi6shofzd3AjFdbo-sXm7P4tOnh0`
      )
      .then((response) => {
        console.log(response.data.results);
        setPhotos(response.data.results);
        setPageNumber(pageNumber + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const addMoreImages = () => {
    setLoading(true);
    if (searchInput === "") {
      axios
        .get(
          `https://api.unsplash.com/photos?page=${pageNumber}&client_id=qOnSIRDJS0JAOuAOi6shofzd3AjFdbo-sXm7P4tOnh0`
        )
        .then((response) => {
          console.log(response.data);
          setPhotos([...photos, ...response.data]);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${searchInput}&page=${pageNumber}&client_id=qOnSIRDJS0JAOuAOi6shofzd3AjFdbo-sXm7P4tOnh0`
        )
      .then((response) => {
        console.log(pageNumber, searchInput)
        console.log(response.data.results);
        setPhotos([...photos, ...response.data.results]);
        
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    setPageNumber(pageNumber + 1);
  }

  const onScroll = () => {
    console.log("here")
  }

  return (
    <div>
      <>
        <Navbar />
        <SearchArea searchInput={searchInput} setSearchInput={setSearchInput} search={search} />

        {photos && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              position: 'relative'
            }}
          >
            {photos.map((photo) => (
              <Cards onScroll={onScroll} src={photo.urls?.full} key={photo.id} />

            ))}
            {!loading && <div style={{ position: 'absolute', bottom: 0 }}> <CircularProgress size={60} /> </div>}
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
