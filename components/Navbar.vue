<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="navbar-brand-logo" src="/assets/images/logo-kirimaja.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Beranda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kabar</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Layanan
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Manajemen Order</a></li>
                <li><a class="dropdown-item" href="#">Integrasi Api</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cek Ongkir</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lacak</a>
            </li>
          </ul>
          <button class="btn-register">Daftar</button>
          <button class="btn-login">Masuk</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
