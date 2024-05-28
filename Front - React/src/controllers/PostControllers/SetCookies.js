export const setCookie = (name, value, options = {}) => {
  if (typeof document === "undefined") {
    return;
  }
  
  const cookieOptions = {
    path: '/',
    ...options
  };
  
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
  for (let optionKey in cookieOptions) {
    if (!cookieOptions[optionKey]) {
      continue;
    }
    cookieString += `; ${optionKey}`;
    if (cookieOptions[optionKey] !== true) {
      cookieString += `=${cookieOptions[optionKey]}`;
    }
  }
  
  document.cookie = cookieString;
}