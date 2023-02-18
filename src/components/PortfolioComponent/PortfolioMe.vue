<script>
export default {
}
</script>

<template>
        <section class="portfolio section" id="portfolio">
            <div class="modal">
                <div class="modal-overlay"></div>
                <div class="slider-wrap">
                    <div class="prev-btn navigation">
                        <i class="uil uil-angle-left-b"></i>
                    </div>
                    <div class="images">
                        <img class="showImage" src="./assets/ios.jpeg">
                        <img src="./assets/innces.png">
                        <img src="./assets/booking.jpg">
                        <img src="./assets/balance.jpg">
                        <img src="./assets/erp2.webp">
                        <img src="./assets/mvcaccounting.jpg">
                    </div>
                    <div class="next-btn navigation">
                        <i class="uil uil-angle-right-b"></i>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="portfolio-header">
                    <div class="portfolio-title">
                        <h3 class="sub-heading">Portfolio</h3>
                        <h3 class="heading">Latest Projects</h3>
                    </div>
                    <div class="filler-btns">
                        <button class="filler-btn" data-filter="all">All</button>
                        <button class="filler-btn" data-filter=".product">Product</button>
                        <button class="filler-btn" data-filter=".inter">Interacting</button>
                        <button class="filler-btn" data-filter=".web">Web App</button>
                    </div>
                </div>
                <div class="portfolio-gallery">
                    <div class="mix prt-card inter">
                        <div class="prt-imade">
                            <img src="./assets/ios.jpeg" alt="">
                            <div class="prt-overlay">
                                <span class="prt-icon zoom-icon" style="--i: 0.0s">
                                <i class="uil uil-search-plus"></i>
                              </span>
                                <a href="" class="prt-icon" style="--i: 0.15s">
                                    <i class="uil uil-link-h"></i>
                                </a>
                            </div>
                        </div>
                        <div class="prt-desc">
                            <h3>ios app (ERP)</h3>
                            <a href="" class="btn secondary-btn sm">Read more</a>
                        </div>
                    </div>
                    <div class="mix prt-card product">
                      <div class="prt-imade">
                          <img src="./assets/innces.png" alt="">
                          <div class="prt-overlay">
                              <span class="prt-icon zoom-icon" style="--i: 0.0s">
                              <i class="uil uil-search-plus"></i>
                            </span>
                              <a href="https://play.google.com/store/apps/details?id=nasih.network.com" class="prt-icon" style="--i: 0.15s">
                                  <i class="uil uil-link-h"></i>
                              </a>
                          </div>
                      </div>
                      <div class="prt-desc">
                          <h3>Social Networking App</h3>
                          <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
                      </div>
                  </div>
                    <div class="mix prt-card product">
                      <div class="prt-imade">
                          <img src="./assets/booking.jpg" alt="">
                          <div class="prt-overlay">
                              <span class="prt-icon zoom-icon" style="--i: 0.0s">
                              <i class="uil uil-search-plus"></i>
                            </span>
                              <a href="http://mvcbooking.atwebpages.com/view/index.php" class="prt-icon" style="--i: 0.15s">
                                  <i class="uil uil-link-h">
                                  </i>
                              </a>
                          </div>
                      </div>
                      <div class="prt-desc">
                          <h3>hotel management system</h3>
                          <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
                      </div>
                  </div>
                  <div class="mix prt-card inter">
                    <div class="prt-imade">
                        <img src="./assets/balance.jpg" alt="">
                        <div class="prt-overlay">
                            <span class="prt-icon zoom-icon" style="--i: 0.0s">
                            <i class="uil uil-search-plus"></i>
                          </span>
                            <a href="http://picosys.atwebpages.com/nasih-system/public/wform.php" class="prt-icon" style="--i: 0.15s">
                                <i class="uil uil-link-h"></i>
                            </a>
                        </div>
                    </div>
                    <div class="prt-desc">
                        <h3>Balance</h3>
                        <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
                    </div>
                </div>
                <div class="mix prt-card web">
                  <div class="prt-imade">
                      <img src="./assets/erp2.webp" alt="">
                      <div class="prt-overlay">
                          <span class="prt-icon zoom-icon" style="--i: 0.0s">
                          <i class="uil uil-search-plus"></i>
                        </span>
                          <a href="http://mvcinncesjs.atwebpages.com/view/index.php" class="prt-icon" style="--i: 0.15s">
                              <i class="uil uil-link-h"></i>
                          </a>
                      </div>
                  </div>
                  <div class="prt-desc">
                      <h3>Innces ERP</h3>
                      <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
                  </div>
              </div>
              <div class="mix prt-card web">
                <div class="prt-imade">
                    <img src="./assets/mvcaccounting.jpg" alt="">
                    <div class="prt-overlay">
                        <span class="prt-icon zoom-icon" style="--i: 0.0s">
                        <i class="uil uil-search-plus"></i>
                      </span>
                        <a href="http://mvcaccounting.atwebpages.com/view/Login/login.php" class="prt-icon" style="--i: 0.15s">
                            <i class="uil uil-link-h"></i>
                        </a>
                    </div>
                </div>
                <div class="prt-desc">
                    <h3>Innces Accounting</h3>
                    <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
                </div>
            </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
@import "../../styles/Portfolio.css";
</style>
