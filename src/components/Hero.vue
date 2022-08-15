<template>
    <div class="hero">
        <div class="hero-inner">
            <h1 class="hero-inner-title"><i>Foo<span>Deez</span></i></h1>
            <p class="hero-inner-tagline">Explore foods you want and beat your hunger</p>
            <a class="hero-inner-button" href="#content">Explore Now!</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Hero',
}
</script>
<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.hero {
    background-image: linear-gradient(to top,
            rgba(6, 70, 53, 0.600),
            rgba(3, 3, 3, 0.856)),
        url("../assets/hero.jpg");
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;

    .hero-inner {
        color: $white-color;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        .hero-inner-title {
            color: $primary-color;
            font-weight: bold;
            font-size: 3rem;
            text-transform: uppercase;

            span {
                color: $brand-secondary-color;
            }

            @include tablet {
                font-size: 3.4rem;
            }
        }

        .hero-inner-tagline {
            font-size: 1.2rem;
            margin-bottom: 15px;

            @include tablet {
                font-size: 1.4rem;
            }
        }

        .hero-inner-button {
            display: block;
            max-width: 200px;
            margin-left: auto;
            margin-right: auto;
            padding: 10px 20px;
            border: 2px solid $brand-secondary-color;
            border-radius: 25px;
            background: none;
            color: $white-color;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 1rem;
            letter-spacing: 1.5px;
            transition: 0.5s;

            &:focus {
                background: $brand-secondary-color;
                color: $white-color;
                outline: 2px solid $brand-secondary-color;
            }

            &:hover {
                background: $brand-secondary-color;
                color: $white-color;
            }
        }
    }
}
</style>