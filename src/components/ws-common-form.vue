<template>
  <div>
    <v-card v-bind="$attrs" class="pa-3">
      <v-card-text
        :class="[titleColor + '--text', { 'pb-0': !!subtitle }]"
        class="d-block"
      >
        <h3>
          <big v-text="title" />
        </h3>
        <p class="body-1 font-weight-bold" v-if="subtitle" v-text="subtitle" />
      </v-card-text>

      <v-card-text class="pt-0">
        <v-form ref="form" v-model="formIsvalid" lazy-validation>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                label="Name*"
                required
                outlined
                hint="What would you like us to call you?"
                persistent-hint
                v-model="formData.name"
                :rules="rules.nameRules" dense
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email*"
                required
                outlined
                hint="e.g. you@your-business.com"
                persistent-hint
                v-model="formData.email"
                :rules="rules.emailRules" dense
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Phone*"
                required
                outlined
                hint="e.g.: 05x xxxx xxx / 04 xxxx xxx / 971 xx xxxx xxx"
                persistent-hint
                v-model="formData.phone"
                :rules="rules.phoneRules"
                dense
              />
            </v-col>
            <v-col cols="12" v-if="false">
              <v-textarea
                :label="commentsLabel"
                v-model="formData.comments"
                required
                outlined
                no-resize
                rows="3" dense
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                :class="submitColor"
                :loading="submitting"
                dark
                block
                @click="submitForm"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- <br v-if="!temp" />
    <v-card v-if="!temp" v-bind="$attrs" class="pa-3">
      <v-card-text
        :class="[titleColor + '--text', { 'pb-0': !!subtitle }]"
        class="d-block"
      >
        <h3>
          <big v-text="title" />
        </h3>
        <p class="body-1 font-weight-bold" v-if="subtitle" v-text="subtitle" />
      </v-card-text>

      <v-card-text class="pt-0">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              label="Name*"
              required
              solo
              light
              v-model="formData.name"
              :rules="rules.nameRules"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email*"
              required
              solo
              light
              v-model="formData.email"
              :rules="rules.emailRules"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Phone*"
              required
              solo
              light
              hint="05x xxxx xxx"
              persistent-hint
              v-model="formData.phone"
              :rules="rules.phoneRules"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              :label="commentsLabel"
              v-model="formData.comments"
              required
              solo
              light
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              :color="submitColor"
              :loading="submitting"
              dark
              block
              @click="submitForm"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card> -->

    <v-snackbar
      vertical
      v-model="snackbar.visible"
      :timeout="snackbar.timeout"
      xcolor="success"
      :color="snackbar.type"
      xoutlined
      :centered="$vuetify.breakpoint.smAndDown"
      elevation="10"
    >
      <template v-if="snackbar.type == 'success'">
        <h4>
          <v-icon>mdi-check-circle</v-icon>
          Sent
        </h4>

        <div class="ml-7">
          Our Sales team will get back to you shortly.
          <br />
          For urgent inquiries please call
          <a class="white--text" :href="globals.contactPoints.phone.href">
            +971 58 5466311
          </a>
        </div>
      </template>
      <template v-else>
        <h4>
          <v-icon>mdi-close-circle</v-icon>
          Ooooops...
        </h4>

        <div class="ml-7">
          Something unexpected happened, your message was not sent!
          <br />
          Please call us directly on
          <a class="white--text" :href="globals.contactPoints.phone.href">
            +971 58 5466311
          </a>
        </div>
      </template>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar.visible = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";
import { commonFormBridge, FormType } from "@/integration/commonFormBridge";
import { PropType } from "vue";

export default mixins(MyMixin).extend({
  name: "ws-common-form",
  props: {
    title: String,
    titleColor: String,
    subtitle: String,
    submitColor: String,
    commentsLabel: String,
    temp: Boolean,
    formType: String as PropType<FormType>,
  },
  data: () => ({
    formIsvalid: true,
    rules: {
      nameRules: [
        (v: string) => !!v || "Name is required",
        (v: string) =>
          (v && v.length >= 3) || "Name must be at least 3 characters",
      ],
      emailRules: [
        (v: string) => !!v || "E-mail is required",
        (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [
        (v: string) => !!v || "Phone is required",
        (v: string) =>
          /^[\d ]*$/.test(v) || "Phone must be valid (digits only)",
        (v: string) =>
          (v && v.replace(/\s/g, "").length >= 9) ||
          "Phone must be at least 9 characters",
      ],
    },

    formData: {
      name: "",
      email: "",
      phone: "",
      comments: "",
    },
    submitting: false,
    snackbar: {
      type: "success" as "success" | "error",
      visible: false,
      timeout: 6000,
    },
  }),
  computed: {
    theForm(): any {
      return this.$refs.form;
    },
  },
  methods: {
    submitForm() {
      if (!this.theForm.validate()) return;
      this.submitting = true;

      commonFormBridge
        .submitCommonForm({
          Type: this.formType,
          Name: this.formData.name,
          Email: this.formData.email,
          Phone: this.formData.phone,
          Comments: this.formData.comments,
        })
        .then(() => {
          // Clear
          this.formData = {
            name: "",
            email: "",
            phone: "",
            comments: "",
          };
          this.theForm.reset();

          this.snackbar.type = "success";
          this.snackbar.visible = true;
          this.$emit("success", this.formType);
          this.logGAEvent(
            "Get a quote",
            `Form submitted`,
            this.$route.name as string + ' Page'
          );
        })
        .catch((err) => {
          this.snackbar.type = "error";
          this.snackbar.visible = true;
          this.$emit("error", this.formType);
          this.logGAException(err);
        })
        .finally(() => {
          this.submitting = false;
        });
    },
  },
});
</script>
