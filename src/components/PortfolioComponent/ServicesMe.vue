<template>
    <!-- --------- Services Section --------- -->
    <section class="services section" id="services">
        <img src="./assets/triangle.png" class="shape triangle" alt="">
        <div class="container">
            <div class="services-info" >
                <h3 class="sub-heading">My Services</h3>
                <h1 class="heading">Things I may do for my clients</h1>
                <p class="text">
                    I make mobile applications and websites with high quality and fast performance in record time and at an
                    affordable price
                </p>
                <div class="milestones">
                    <div class="ml">
                        <h2 class="number"><span data-target="2">30</span>+</h2>
                        <h5>Years</h5>
                    </div>
                    <div class="ml">
                        <h2 class="number"><span data-target="45">5000</span>+</h2>
                        <h5>Consulting</h5>
                    </div>
                    <div class="ml">
                        <h2 class="number"><span data-target="30">5000</span>+</h2>
                        <h5>operations</h5>
                    </div>
                </div>
                <!-- <div class="cta">
                    <a href="#" class="btn">Hire my</a>
                    <a href="./assets/finish-mn-CV222.pdf" download class="btn
                  secondary-btn">Download CV</a>
                </div> -->
            </div>
            <div class="services-grid">
                <div class="srv-card" v-motion-pop-visible-once>
                    <div class="card-desc">
                        <h3>E-commerce</h3>
                        <p class="text">
                            Create professional websites and applications for e-commerce.
                        </p>
                    </div>
                    <!-- <a href="" class="btn secondary-btn">Explore More</a> -->
                </div>
                <div class="srv-card" v-motion-pop-visible-once>
                    <div class="card-desc">
                        <h3>Servicing Applications</h3>
                        <p class="text">
                            I can make systems such as accounts programs, ERP and other programs.
                        </p>
                    </div>
                    <!-- <a href="" class="btn secondary-btn">Explore More</a> -->
                </div>
                <div class="srv-card" v-motion-pop-visible-once> 
                    <div class="card-desc">
                        <h3>Mobile App</h3>
                        <p class="text">
                            I can make mobile applications that work on everything (Ios , Android)
                        </p>
                    </div>
                    <!-- <a href="" class="btn secondary-btn">Explore More</a> -->
                </div>
                <div class="srv-card" v-motion-pop-visible-once>
                    <div class="card-desc">
                        <h3>App Desing</h3>
                        <p class="text">
                            In every project I work on, I choose the best design to take precedence over the competition
                        </p>
                    </div>
                    <!-- <a href="" class="btn secondary-btn">Explore More</a> -->
                </div>
                <img src="./assets/square1.png" class="shape square">
            </div>
        </div>
    </section>
</template>
<script>
export default {
methods: {
}
}
</script>
<style scoped>
@import "../../styles/Portfolio.css";
</style>
