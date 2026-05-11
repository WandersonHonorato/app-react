function Navbar() {
  return (
    <nav class="navbar bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light fs-5 fw-bold">WH</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
}

export default Navbar;