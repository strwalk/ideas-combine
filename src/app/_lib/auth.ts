import { getSession } from '@auth0/nextjs-auth0';

const getUserId = async (): Promise<string> => {
  const session = await getSession();
  return session ? session.user.sub : '';
};

export { getUserId };
