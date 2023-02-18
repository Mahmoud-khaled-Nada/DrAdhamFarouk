<template>
    <div>
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

<!-- 
    <h3>Clinic’s Scope includes</h3>
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
 -->