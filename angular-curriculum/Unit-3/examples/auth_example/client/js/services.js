app.service("UserService", UserService)

UserService.$inject = ["$http", "$window"]

function UserService($http, $window){
  let user = {}

  const currentUser= () => user;

  const logout = () => {
    user = null;
    $window.localStorage.clear();
  }
  const setCurrentUser = (data) =>{
    let {token,user} = data.data
    $window.localStorage.setItem("token",token);
    $window.localStorage.setItem("user",JSON.stringify(user));
  }

  const signup = (user) => $http.post('/api/signup', user);

  const login = (user) => $http.post('/api/login', user);

  const getCurrentUser =() => JSON.parse($window.localStorage.getItem("user"));

  const getAllUsers = () => $http.get("/api/users/");

  const getSingleUser = (id) => $http.get("/api/users/" + id);

  const editUser = (user) => $http.put("/api/users/" + user.id, user);

  const removeUser = (user) => $http.delete("/api/users/" + user.id);

  return {
    currentUser,
    login,
    logout,
    signup,
    setCurrentUser,
    getCurrentUser,
    getAllUsers,
    getSingleUser,
    editUser,
    removeUser
  };
}

