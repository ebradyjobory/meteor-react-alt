
// we got normal meteor scope over here

export function inc(){
    Session.set('counter', Session.get('counter') + 1);
}