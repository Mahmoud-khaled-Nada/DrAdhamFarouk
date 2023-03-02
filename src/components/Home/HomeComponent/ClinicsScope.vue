<template>
    <!-- <div>
      <v-expansion-panels
        v-model="panel"
        :disabled="disabled"
        multiple
      >
        <v-expansion-panel>
          <v-expansion-panel-title><h3>Clinic’s Scope includes</h3></v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
            Aesthetic Surgery: Rhinoplasty – Otoplasty – Eyelids Surgery
            Breast Surgery: Reduction – Augmentation – Lifting – Reconstructing – Gynecomastia
            Body Sculpting: Abdominoplasty – Arm Lift – Thighs Lift – Body Lift – Liposuction –
            Fat
            injection
            Congenital Anomalies: Cleft lip – Maxillo-Facial – Ear – Nose – Hand – Foot –
            Genitalia
            Hand Surgery: Injuries – Tumors – Infections – Re-plantation
            Burn: Treatment of Burn – Post-burn Deformities
            Injuries: Face – Skin and Soft tissues all over the body – Scar removal
            Tumors: Face – Skin and Soft tissues all over the body
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div> -->
    <div class="card-con-main">
      <h1>Clinic’s Scope includes</h1>
      <p>
              Aesthetic Surgery: Rhinoplasty – Otoplasty – Eyelids Surgery
              Breast Surgery: Reduction – Augmentation – Lifting – Reconstructing – Gynecomastia
              Body Sculpting: Abdominoplasty – Arm Lift – Thighs Lift – Body Lift – Liposuction –
              Fat
              injection
              Congenital Anomalies: Cleft lip – Maxillo-Facial – Ear – Nose – Hand – Foot –
              Genitalia
              Hand Surgery: Injuries – Tumors – Infections – Re-plantation
              Burn: Treatment of Burn – Post-burn Deformities
              Injuries: Face – Skin and Soft tissues all over the body – Scar removal
              Tumors: Face – Skin and Soft tissues all over the body
      </p>
    </div>
  </template>

<script>
export default {
  data: () => ({
    panel: [0, 1],
    disabled: false,
    readonly: false,
  }),
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@300;400;500;600;700;800&display=swap");
.card-con-main {
      background: #eee;
    padding: 8px;
    max-width: 100%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card-con-main h1 {
  text-align: center;
    font-size: 25px;
    padding: 5px;
    color: #7A0BC0;
    font-family: 'Lobster';
}

.card-con-main p {
    color: hsl(0deg 0% 40%);
    font-size: 0.8rem;
    line-height: 2;
    transition: 0.3s color;
}
</style>