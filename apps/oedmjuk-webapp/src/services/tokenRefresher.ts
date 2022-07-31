let currentAccessToken:Promise<string|null> = Promise.resolve(null);

export const SetTokens = (accessToken:string) => {
  currentAccessToken = Promise.resolve(accessToken);
};

export const GetToken = ():Promise<string|null> => {
  //check if accesstoken has expired.
  return currentAccessToken;
}

const GetNewToken = ():Promise<string|null> => {
  return new Promise((resolve, reject) => {
    //get new token
    //set currentAccessToken to new token
    //resolve new token
  });
}
