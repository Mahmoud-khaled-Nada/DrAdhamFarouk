<script>
export default {
}
</script>

<template>
 <h1></h1>        <!-- --------- Contact Section --------- -->
        <section class="contact section" id="contact">
          <img src="./assets/triangle.png" class="shape triangle">
          <div class="container">
            <img src="./assets/square2.png" class="shape square">
            <div class="contact-info">
              <h3 class="sub-heading">Contact me</h3>
              <h1 class="heading">Let's work tagether</h1>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quos fuga fugiat eaque modi nesciunt iusto molestias
                  enim quod iure corporis?
              </p>
              <a href="mahmoudnada5566@gmail.com" class="mail">
                Mahmoud Nada@gmail.com <i class="uil uil-arrow-right"></i>
              </a>
            </div>

            <form action="#" onsubmit="send_message(this)" class="contact-form">
              <h3>Send me a message</h3>
              <input type="text" name="name" class="form-input" placeholder="Your name" required>
              <input type="text" email="email" class="form-input" placeholder="Your Email" required>
              <textarea placeholder="Project Details" name="message" class="form-input" required>
              </textarea>
              <input type="submit" name="send" class="btn">
            </form>
          </div>
        </section></template>

<style scoped>
@import "../../styles/Portfolio.css";
</style>
