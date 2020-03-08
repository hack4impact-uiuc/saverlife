import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal:'4%'
  },
  top:{
    width:'100%',
    marginLeft: 0 ,
  },
  bottom:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomItem:{
    aspectRatio: 1/1,
    width: '50%',
    padding: 5,
  },
  bottomItemInner:{
    flex: 1,
    backgroundColor: '#292929'
  },
  title:{
    fontWeight: "bold",
    marginBottom: 5,
    marginTop:15,
    color: 'grey'
  },
  categoryImage:{
    width:10,
    height:10,
    backgroundColor:'black',
  }
})