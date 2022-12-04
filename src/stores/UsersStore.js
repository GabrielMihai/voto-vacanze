import { defineStore } from 'pinia';

export const useUsersStore = defineStore('UsersStore', {
  state: () => {
    return {
      users: [
        {
          name: 'Alessia',
          place: 'Sicilia - Porto Trilly',
        },
        {
          name: 'Claudia',
          place: 'Creta',
        },
        {
          name: 'Dario',
          place: 'Sicilia - Porto Palo',
        },
        {
          name: 'Federica',
          place: 'Corsica',
        },
        {
          name: 'Gabriel',
          place: 'Sardegna - Alghero',
        },
        {
          name: 'Rodrigo',
          place: 'Francia - tutta',
        },
      ],
      selectedUser: undefined,
    };
  },
  actions: {
    setSelectedUser(selectedUser) {
      this.selectedUser = selectedUser;
    },
  },
});
