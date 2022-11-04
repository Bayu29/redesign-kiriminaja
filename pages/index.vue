<template>
  <div>
    <Header/>
    <CekPaket/>
    <Partner/>
    <img class="banner-bawah" src="/assets/images/pesta-pora-new.png" alt="">
    <Service/>
    <div class="featured-service">
      <h4 class="mx-auto text-center">Kirim Paket Makin Singkat</h4>
      <h6 class="text-center">Masih kurang? Yuk explore sekarang biar ngga penasaran</h6>
    </div>

    <div class="row">
      <div class="col-md-6">
        <img width="585" height="349" src="/assets/images/banner-home-2.png" alt="">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item"><i class="fa-solid fa-circle-check"></i> Berbagai service expedisi sameday, kargo dan lainnya.</li>
          <li class="list-group-item"><i class="fa-solid fa-circle-check"></i> Penjemputan paket tanpa minimal kiriman.</li>
          <li class="list-group-item"><i class="fa-solid fa-circle-check"></i> Fitur dropoff atau cashless.</li>
          <li class="list-group-item"><i class="fa-solid fa-circle-check"></i> Kirim paket COD dengan pencairan tercepat.</li>
          <li class="list-group-item"><i class="fa-solid fa-circle-check"></i> Platform mudah digunakan (<i>user friendly</i>).</li>
          <li class="list-group-item"><i class="fa-solid fa-circle-check"></i> Meminimalisir rasio retur.</li>
        </ul>
      </div>
    </div>
    <img class="apk-downloader" src="/assets/images/apk.png"  alt="">
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    Header: () => import("~/components/Header.vue"),
    CekPaket: () => import("~/components/CekPaket.vue"),
    Partner: () => import("~/components/Partner.vue"),
    Service: () => import("~/components/Service.vue"),
    Footer: () =>import("~/components/Footer.vue"),
  }
}
</script>
