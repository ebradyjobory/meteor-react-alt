import AppActions from 'actions/AppActions';
class MapsStore {

  constructor() {

    /** STATES **/
    this.counter = 0;

    /** EVENTS LISTENERS **/
    this.bindListeners({
      handleIncrement: AppActions.INCREMENT
    });
  }

  handleIncrement() {
    this.counter++;
  }

}

// Export our newly created map
export default alt.createStore(MapsStore);