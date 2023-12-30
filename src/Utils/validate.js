const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!isEmailValid) return "Email Id is not valid"
    if(!isPasswordValid) return "Password is not valid"
    // if(!isNameValid) return "Invalid Name" 

    return null;
};


export default checkValidData;
