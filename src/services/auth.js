import { UserManager, WebStorageStateStore } from 'oidc-client-ts';

const settings = {
  authority: 'https://docker1.devops.esc.yipintsoigroup.com',
  client_id: 'cd6973253ed0795d930c',
  redirect_uri: 'https://nodejs.devops.esc.yipintsoigroup.com/react-apisix/callback',
  post_logout_redirect_uri: 'https://nodejs.devops.esc.yipintsoigroup.com/react-apisix/',
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