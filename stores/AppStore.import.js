import AppActions from 'actions/AppActions';
class MapsStore {

  constructor() {

    /** STATES **/
    this.counter = 0;
    this.db = [];

    /** EVENTS LISTENERS **/
    this.bindListeners({
      handleIncrement: AppActions.UPDATE_DATA
    });
  }

  handleIncrement(data) {
    this.counter++;
  }

}

// Export our newly created map
export default alt.createStore(MapsStore);