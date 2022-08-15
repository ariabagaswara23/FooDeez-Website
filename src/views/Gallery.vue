<template>
  <div class="gallery">
    <div class="container mt-15 mb-15">
      <h1 class="content-title">Gallery</h1>
      <p class="content-sub-title">Explore foods galleries</p>
      <div class="gallery-content mt-5">
        <figure class="gallery__item gallery__item--1">
          <img src="../assets/image-1.jpg" alt="Gallery image 1" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src="../assets/image-2.jpg" alt="Gallery image 2" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src="../assets/image-3.jpg" alt="Gallery image 3" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src="../assets/image-4.jpg" alt="Gallery image 4" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img src="../assets/image-5.jpg" alt="Gallery image 5" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src="../assets/image-6.jpg" alt="Gallery image 6" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--7">
          <img src="../assets/image-7.jpg" alt="Gallery image 7" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--8">
          <img src="../assets/image-8.jpg" alt="Gallery image 8" class="gallery__img">
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
}
</script>
<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.gallery-content {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 1.5rem;

  .gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery__item--3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  .gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .gallery__item--5 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .gallery__item--6 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery__item--7 {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery__item--8 {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 .5rem 1rem rgba(240, 187, 98, .15) !important;
    }
  }
}
</style>
