app.component("customNav", {
  templateUrl: '../templates/nav.html',
  controller: NavController
})

NavController.$inject = ["$scope", "UserService"]

function NavController($scope,UserService){
  const vm = this;
  vm.currentUser = UserService.getCurrentUser();
};