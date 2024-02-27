const Users = {
  slug: 'users',
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'User', value: 'user' },
        { label: 'Author', value: 'author' },
      ],
      required: true,
      defaultValue: 'user', // Default role for new users
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
  ],
};

export default Users;
