function Sidebar() {
  var root = document.getElementById('root');
  var sidebar = document.createElement('div');
  sidebar.innerHTML = "This is a sidebar";
  root.append(sidebar)
}

// module.exports = Sidebar
export default Sidebar