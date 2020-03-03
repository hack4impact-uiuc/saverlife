// /*This is an Example of PopuUp Dialog Example in React Native*/
// import React, { Component } from 'react';
// import { Button, View, Text, StyleSheet } from 'react-native';
// import Dialog, {
//   DialogTitle,
//   DialogContent,
//   DialogFooter,
//   DialogButton,
//   SlideAnimation,
//   ScaleAnimation,
// } from 'react-native-popup-dialog';

// export default class BillDialogue extends Component {
//   state = {
//     defaultAnimationDialog: false,
//     scaleAnimationDialog: false,
//     slideAnimationDialog: false,
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={styles.container}>
//           <Button
//             title="Default Animation Dialog"
//             onPress={() => {
//               this.setState({
//                 defaultAnimationDialog: true,
//               });
//             }}
//           />

//           <Button
//             title="Scale Animation Dialog"
//             onPress={() => {
//               this.setState({
//                 scaleAnimationDialog: true,
//               });
//             }}
//           />

//           <Button
//             title="Slide Animation Dialog"
//             onPress={() => {
//               this.setState({
//                 slideAnimationDialog: true,
//               });
//             }}
//           />
//         </View>

//         <Dialog
//           onDismiss={() => {
//             this.setState({ defaultAnimationDialog: false });
//           }}
//           width={0.9}
//           visible={this.state.defaultAnimationDialog}
//           rounded
//           actionsBordered
//           dialogTitle={
//             <DialogTitle
//               title="Default Animation Dialog Simple"
//               style={{
//                 backgroundColor: '#F7F7F8',
//               }}
//               hasTitleBar={false}
//               align="left"
//             />
//           }
//           footer={
//             <DialogFooter>
//               <DialogButton
//                 text="CANCEL"
//                 bordered
//                 onPress={() => {
//                   this.setState({ defaultAnimationDialog: false });
//                 }}
//                 key="button-1"
//               />
//               <DialogButton
//                 text="OK"
//                 bordered
//                 onPress={() => {
//                   this.setState({ defaultAnimationDialog: false });
//                 }}
//                 key="button-2"
//               />
//             </DialogFooter>
//           }>
//           <DialogContent
//             style={{
//               backgroundColor: '#F7F7F8',
//             }}>
//             <Text>Here is an example of default animation dialog</Text>
//           </DialogContent>
//         </Dialog>
//         <Dialog
//           onTouchOutside={() => {
//             this.setState({ scaleAnimationDialog: false });
//           }}
//           width={0.9}
//           visible={this.state.scaleAnimationDialog}
//           dialogAnimation={new ScaleAnimation()}
//           onHardwareBackPress={() => {
//             console.log('onHardwareBackPress');
//             this.setState({ scaleAnimationDialog: false });
//             return true;
//           }}
//           dialogTitle={
//             <DialogTitle
//               title="Scale Animation Dialog Sample"
//               hasTitleBar={false}
//             />
//           }
//           actions={[
//             <DialogButton
//               text="DISMISS"
//               onPress={() => {
//                 this.setState({ scaleAnimationDialog: false });
//               }}
//               key="button-1"
//             />,
//           ]}>
//           <DialogContent>
//             <View>
//               <Text>
//                 Here is an example of scale animation dialog. Close using back
//                 button press
//               </Text>
//               <Button
//                 title="Close"
//                 onPress={() => {
//                   this.setState({ scaleAnimationDialog: false });
//                 }}
//                 key="button-1"
//               />
//             </View>
//           </DialogContent>
//         </Dialog>
//         <Dialog
//           onDismiss={() => {
//             this.setState({ slideAnimationDialog: false });
//           }}
//           onTouchOutside={() => {
//             this.setState({ slideAnimationDialog: false });
//           }}
//           visible={this.state.slideAnimationDialog}
//           dialogTitle={<DialogTitle title="Slide Animation Dialog Sample" />}
//           dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}>
//           <DialogContent>
//             <Text>
//               Here is an example of slide animation dialog. Please click outside
//               to close the the dialog.
//             </Text>
//           </DialogContent>
//         </Dialog>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
