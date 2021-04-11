function Header() {
  var root = document.getElementById('root');
  var header = document.createElement('div');
  header.innerHTML = "This is a Header";
  root.append(header)
}

// CommonJs
// module.exports = Header

export default Header