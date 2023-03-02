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
        <div class="controls">
            <div class="portfolio-header">
                <div class="portfolio-title">
                    <h3 class="heading">Pictures Before Sfter</h3>
                </div>
                <div class="filler-btns">
                    <button class="filler-btn" data-filter="all">All</button>
                    <button class="filler-btn" data-filter=".product">{{ titel }}</button>
                    <button class="filler-btn" data-filter=".inter">{{ BreastSurgery }}</button>
                    <button class="filler-btn" data-filter=".surgery">{{ MaleBreastSurgery }}</button>
                    <button class="filler-btn" data-filter=".sculpture">{{ BodySculpture }}</button>
                </div>
            </div>
            <div class="portfolio-gallery">
                <!-- new Rhinoplasty -->
                <div class="mix prt-card product">
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
                <div class="mix prt-card product">
                    <div class="prt-imade">
                        <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_05.jpg"
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
                <div class="mix prt-card product">
                    <div class="prt-imade">
                        <img src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_11-01.jpg"
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
                <div class="mix prt-card product">
                    <div class="prt-imade">
                        <img src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_03-01.jpg"
                            alt="">
                        <div class="prt-overlay">
                            <span class="prt-icon zoom-icon" style="--i: 0.0s">
                                <i class="uil uil-search-plus"></i>
                            </span>
                            <a href="http://picosys.atwebpages.com/nasih-system/public/wform.php" class="prt-icon"
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
                <div class="mix prt-card product">
                    <div class="prt-imade">
                        <img src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_08.jpg"
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
                <div class="mix prt-card product">
                    <div class="prt-imade">
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_06.jpg">
                        <div class="prt-overlay">
                            <span class="prt-icon zoom-icon" style="--i: 0.0s">
                                <i class="uil uil-search-plus"></i>
                            </span>
                            <a href="http://mvcaccounting.atwebpages.com/view/Login/login.php" class="prt-icon"
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
                <!-- end Rhinoplasty -->

                <!-- new Breast Surgery -->
                <div class="mix prt-card inter">
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
                <div class="mix prt-card inter">
                    <div class="prt-imade">
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Augmentation-Mastopexy-_01.jpg">
                        <div class="prt-overlay">
                            <span class="prt-icon zoom-icon" style="--i: 0.0s">
                                <i class="uil uil-search-plus"></i>
                            </span>
                            <a href="http://picosys.atwebpages.com/nasih-system/public/wform.php" class="prt-icon"
                                style="--i: 0.15s">
                                <i class="uil uil-link-h"></i>
                            </a>
                        </div>
                    </div>
                    <div class="prt-desc">
                        <h3>Breast Surgery</h3>
                        <!-- <a href="" class="btn secondary-btn sm">Read more</a> -->
                    </div>
                </div>
                <div class="mix prt-card inter">
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
                <div class="mix prt-card inter">
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
                <div class="mix prt-card inter">
                    <div class="prt-imade">
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Mammaplasty-_01.jpg">
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
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Gynaecomastia-_01.jpg">
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
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2018/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Gynaecomastia-_03.jpg">
                        <div class="prt-overlay">
                            <span class="prt-icon zoom-icon" style="--i: 0.0s">
                                <i class="uil uil-search-plus"></i>
                            </span>
                            <a href="http://picosys.atwebpages.com/nasih-system/public/wform.php" class="prt-icon"
                                style="--i: 0.15s">
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
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Gynaecomastia-_02.jpg">
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
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Liposuction-_02.jpg">
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
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Liposuction-_01.jpg">
                        <div class="prt-overlay">
                            <span class="prt-icon zoom-icon" style="--i: 0.0s">
                                <i class="uil uil-search-plus"></i>
                            </span>
                            <a href="http://picosys.atwebpages.com/nasih-system/public/wform.php" class="prt-icon"
                                style="--i: 0.15s">
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
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Body-Sculpture-_01.jpg">
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
                        <img
                            src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Thigh-lift-_01.jpg">
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
    // name: 'nadadd',
    data() {
        return {
            titel: "Rhinoplasty",
            MaleBreastSurgery: "Male Breast Surgery",
            BodySculpture: "Body Sculpture",
            BreastSurgery: "Breast Surgery"
        }
    },
    mounted() {
        const containerEl = document.querySelector('.controls');
        const mixer = mixitup(containerEl);
        return mixer;
    }
}
</script>

<style scoped>@import "../../styles/Portfolio.css";</style>
