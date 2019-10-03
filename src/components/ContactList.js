import React from 'react';
import Contact from './Contact';

const contacts = [{"name":"Brooke Hall","avatar":"https://randomuser.me/api/portraits/med/women/80.jpg","online":false},{"name":"Ciro Van Berkel","avatar":"https://randomuser.me/api/portraits/med/men/80.jpg","online":true},{"name":"Zachary Adams","avatar":"https://randomuser.me/api/portraits/med/men/25.jpg","online":true},{"name":"Margot Roussel","avatar":"https://randomuser.me/api/portraits/med/women/40.jpg","online":true},{"name":"Cílio da Cruz","avatar":"https://randomuser.me/api/portraits/med/men/62.jpg","online":true},{"name":"بهاره نكو نظر","avatar":"https://randomuser.me/api/portraits/med/women/22.jpg","online":false}];


function ContactList() {
  return contacts.map(
    (contact) => (
      <Contact {...contact} />
    )
  );
}

export default ContactList;
