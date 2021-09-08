import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getDocumentaryMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const dimentions = Dimensions.get('screen')
const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [poplularMovies, setPopularMovies] = useState('');
  const [poplularTv, setPopularTv] = useState('');
  const [familyMovies, setFamilyMovies] = useState('');
  const [documentaryMovies, setDocumentaryMovies] = useState('');

  const [error, setError] = useState(false);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      const moviesImagesArray = [];
      movies.forEach(movie => {
        moviesImagesArray.push('https://image.tmdb.org/t/p/w500/'+movie.poster_path)
      });

      setMoviesImages(moviesImagesArray);
    }).catch(err => {
        setError(err)
    });

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
    }).catch(err => {
        setError(err)
    });

    getPopularTv()
      .then(movies => {
        setPopularTv(movies);
    }).catch(err => {
        setError(err)
    });
    
    getFamilyMovies()
      .then(movies => {
        setFamilyMovies(movies);
    }).catch(err => {
        setError(err)
    });

    getDocumentaryMovies()
      .then(movies => {
        setDocumentaryMovies(movies);
    }).catch(err => {
        setError(err)
    });

  }, []);

  
  
  
  return (
    <React.Fragment>
      <ScrollView>
      <View style={styles.sliderContainer}>
        <SliderBox 
          images={moviesImages} 
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimentions.height / 1.5} 
          autoplay={true} 
          circleLoop={true} />
      </View>
      
      <View style={styles.carousel}>
        <List title="Popular Movies" content={poplularMovies}/>
      </View>
      <View style={styles.carousel}>
        <List title="Popular Shows" content={poplularTv}/>
      </View>
      <View style={styles.carousel}>
        <List title="Family Movies" content={familyMovies}/>
      </View>
      <View style={styles.carousel}>
        <List title="Documentaries" content={documentaryMovies}/>
      </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  
  sliderContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  sliderStyle: {
    height: 0
  },
  carousel: {
    flex: 1, 
    alignItems: "center" 
  },

})

export default Home;