export const isUrl = url =>
  !!url.trim().match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);

export const isEmail = (email = '') => !!email.trim().match(/\w@\w.\w/);

export const isValidPassword = (password = '') => password.trim().length > 6;
