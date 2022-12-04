import { defineStore } from 'pinia';

export const useUsersStore = defineStore('UsersStore', {
  state: () => {
    return {
      users: [
        {
          name: 'Alessia',
          destination: 'Sicilia - Porto Trilly',
        },
        {
          name: 'Claudia',
          destination: 'Creta',
        },
        {
          name: 'Dario',
          destination: 'Sicilia - Porto Palo',
        },
        {
          name: 'Federica',
          destination: 'Corsica',
        },
        {
          name: 'Gabriel',
          destination: 'Sardegna - Alghero',
        },
        {
          name: 'Rodrigo',
          destination: 'Francia - tutta',
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
