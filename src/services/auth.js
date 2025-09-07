import { UserManager, WebStorageStateStore } from 'oidc-client-ts';

const settings = {
  authority: 'https://172.26.8.178',
  client_id: 'cd6973253ed0795d930c',
  redirect_uri: 'https://nodejs.devops.esc.yipintsoigroup.com/react-apisix/callback',
  post_logout_redirect_uri: 'https://nodejs.devops.esc.yipintsoigroup.com/',
  scope: 'openid profile', 
  response_type: 'code',
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

export const userManager = new UserManager(settings);

export const login = () => {
  userManager.signinRedirect();
};

export const logout = () => {
  userManager.signoutRedirect();
};

export const getUser = () => {
  return userManager.getUser();
};

export const signinRedirectCallback = () => {
  return userManager.signinRedirectCallback();
};