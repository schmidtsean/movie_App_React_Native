import React from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
  content: PropTypes.object,
}

class List extends React.PureComponent {
  render() {
    const {title, content} = this.props
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => <Card item={item}/>}
            >

          </FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 20
  },
  list: {
    marginTop: 25,
  },
})
  
List.PropTypes = propTypes;


export default List;