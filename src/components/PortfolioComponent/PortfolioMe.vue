<template>
  <section class="portfolio section" id="portfolio">
    <div class="modal">
      <div class="modal-overlay"></div>
      <div class="slider-wrap">
        <div class="prev-btn navigation">
          <i class="uil uil-angle-left-b"></i>
        </div>
        <div class="next-btn navigation">
          <i class="uil uil-angle-right-b"></i>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="portfolio-header">
        <div class="portfolio-title">
          <h3 class="heading">Sample Case</h3>
        </div>
        <div class="filler-btns">
          <button class="filler-btn" data-filter="all">All</button>
          <button class="filler-btn" data-filter=".product">{{ titel }}</button>
          <button class="filler-btn" data-filter=".inter">Breast Surgery</button>
          <button class="filler-btn" data-filter=".surgery">{{ MaleBreastSurgery }}</button>
          <button class="filler-btn" data-filter=".sculpture">{{ BodySculpture }}</button>
          <button class="filler-btn" data-filter=".">{{  }}</button>
        </div>
      </div>
      <div class="portfolio-gallery" v-motion-slide-bottom>
        <!-- new Rhinoplasty -->
        <div class="mix prt-card product" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_11-03.jpg">
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
            <h3>{{ titel }}</h3>
            <a href="" class="btn secondary-btn sm">Read more</a>
          </div>
        </div>
        <div class="mix prt-card product" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_05.jpg"
              alt="">
            <div class="prt-overlay">
              <span class="prt-icon zoom-icon" style="--i: 0.0s">
                <i class="uil uil-search-plus"></i>
              </span>
              <a href="https://play.google.com/store/apps/details?id=nasih.network.com" class="prt-icon"
                style="--i: 0.15s">
                <i class="uil uil-link-h"></i>
              </a>
            </div>
          </div>
          <div class="prt-desc">
            <h3>{{ titel }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card product" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_11-01.jpg"
              alt="">
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
            <h3>{{ titel }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card product" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_03-01.jpg"
              alt="">
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
            <h3>{{ titel }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card product" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_08.jpg"
              alt="">
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
            <h3>{{ titel }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card product" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_06.jpg">
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
            <h3>{{ titel }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <!-- end Rhinoplasty -->

        <!-- new Breast Surgery -->
        <div class="mix prt-card inter" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Breast-Augmentation-_01.jpg">
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
            <h3>Breast Surgery</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card inter" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Augmentation-Mastopexy-_01.jpg">
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
            <h3>Breast Surgery</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card inter" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Mammaplasty-_02-01.jpg">
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
            <h3>Breast Surgery</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card inter" v-motion-pop-visible>
          <div class="prt-imade">
            <img
              src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Augmentation-Mastopexy-_02.jpg">
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
            <h3>Breast Surgery</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card inter" v-motion-pop-visible>
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Mammaplasty-_01.jpg">
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
            <h3>Breast Surgery</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <!-- end Rhinoplasty -->

        <!-- new Breast Male Breast Surgery -->
          <div class="mix prt-card surgery">
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Gynaecomastia-_01.jpg">
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
            <h3>{{ MaleBreastSurgery }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card surgery">
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2018/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Gynaecomastia-_03.jpg">
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
            <h3>{{ MaleBreastSurgery }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card surgery">
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Gynaecomastia-_02.jpg">
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
            <h3>{{ MaleBreastSurgery }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <!-- end Male Breast Surgery -->


         <!-- new Body Sculpture -->
          <div class="mix prt-card sculpture">
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Liposuction-_02.jpg">
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
            <h3>{{ BodySculpture }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card sculpture">
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Liposuction-_01.jpg">
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
            <h3>{{ BodySculpture }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card sculpture">
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Body-Sculpture-_01.jpg">
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
            <h3>{{ BodySculpture }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <div class="mix prt-card sculpture">
          <div class="prt-imade">
            <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Thigh-lift-_01.jpg">
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
            <h3>{{ BodySculpture }}</h3>
            <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
          </div>
        </div>
        <!-- end Body Sculpture -->
      </div>
    </div>
  </section>
</template>
<script>
import mixitup from 'mixitup';
export default {
  data() {
    return {
      // msg: 'Vue.js & MixItUp example'
      titel: "Rhinoplasty",
      MaleBreastSurgery: "Male Breast Surgery",
      BodySculpture: "Body Sculpture",
    }
  },
  mounted() {
    var containerEl = document.querySelector('.container');
    return mixitup(containerEl);
  },
}
</script>

<style scoped>@import "../../styles/Portfolio.css";</style>
