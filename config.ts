export const getToken = () => {
    const userItem = localStorage.getItem("user");
    let token = "";
    
    if (userItem !== null && userItem !== undefined) {
      const user = JSON.parse(userItem);
      token = user.token;
    }
  
    return "JWT " + token;
  };