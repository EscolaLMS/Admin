export const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;
// The escolalms/api seed creates the admin as admin2@escolalms.com (there is no
// plain admin@escolalms.com); admin2 has the `admin` role.
export const ADMIN_CREDENTIALS = {
  email: 'admin2@escolalms.com',
  password: 'secret',
};
