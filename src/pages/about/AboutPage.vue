<template>
  <div id="about-page" class="default-page-layout">
    <header>
      <div class="content row">
        <section class="left-actions column">
          <a href="/#/">
            <i class="icon ion-md-arrow-back"></i>
          </a>
        </section>
        <section class="content column">
          <div class="row">
            <div class="column">
              <h1>{{ $t('page.about.inside.greeting') }}</h1>
              <p>{{ $t('page.about.inside.introduction') }}</p>
            </div>
            <div class="column me z-depth-5" :style="meImg"></div>
          </div>
        </section>
      </div>
    </header>

    <main class="z-depth-5">
      <div class="content">
        <section class="social-links">
          <ul>
            <li>
              <i class="icon ion-logo-github"></i>
            </li>
            <li>
              <i class="icon ion-logo-linkedin"></i>
            </li>
          </ul>
        </section>
        <section class="cover-letter">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, deleniti fugiat quis quas voluptatibus beatae? Alias perferendis suscipit vero odio. Vero accusantium aliquid earum voluptates iste? Eum doloremque vero temporibus!
            Sint ipsa dolore excepturi optio molestiae deserunt omnis ut exercitationem cupiditate autem expedita error amet rem ad at obcaecati, ullam id sed perspiciatis illo unde? Sint blanditiis nesciunt delectus minus?
            Itaque perferendis soluta, quae asperiores, excepturi eius ipsam quisquam placeat reprehenderit beatae consequuntur nulla dicta optio odio reiciendis natus veritatis delectus officia vero culpa quaerat ratione corporis commodi assumenda? Possimus.
          </p>
        </section>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import meImg from '@/assets/images/me.jpg'

export default {
  data: function () {
    return {
      meImg: { backgroundImage: `url(${meImg})` }
    }
  }
}
</script>

<style scoped lang="scss">
header {
  background: linear-gradient(#3859e1, #4f71f4);
  color: white;

  a {
    color: white;
  }

  .content {
    padding: 20px;

    h1 {
      color: #6aead0;
      font-size: 100px;
      display: inline;
    }

    .me {
      width: 201px;

      background-position: center;
      background-position-x: -65px;
      background-size: cover;

      border-radius: 50%;
    }
  }
}

main {
  .content {
    color: #a1aab8;

    .social-links {
      color: #6aead0;

      ul {
        padding: 0;

        li {
          font-size: 30px;
          list-style: none;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
