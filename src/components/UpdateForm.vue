<template>
  <div>
    <h3>Update Database</h3>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Company Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Company Name"
          v-model="vName"
        />
      </div>
      <div class="form-group col-md-6">
        <label>Business ID</label>
        <input
          type="text"
          class="form-control"
          name="business_id"
          placeholder="Business ID (eg. 1234567-8)"
          v-model="vBusinessID"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Street</label>
        <input
          type="text"
          class="form-control"
          name="street"
          placeholder="Street"
          v-model="vStreet"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Postcode</label>
        <input
          type="text"
          class="form-control"
          name="postcode"
          placeholder="Postcode"
          v-model="vPostcode"
        />
      </div>
      <div class="form-group col-md-6">
        <label>City</label>
        <input
          type="text"
          class="form-control"
          name="city"
          placeholder="City"
          v-model="vCity"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Email"
          v-model="vEmail"
        />
      </div>
      <div class="form-group col-md-6">
        <label>Phone number</label>
        <input
          type="text"
          class="form-control"
          name="phone"
          placeholder="Phone number"
          v-model="vPhoneNumber"
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <button class="btn btn-info" v-on:click="validateAndPost">
          <i class="fa fa-database"></i>
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Validator from "../services/Validator";
import CompaniesService from "../services/CompaniesService";

export default {
  /**
   * All the form values are empty by default. If this is update instance then
   * these values will be updated to those that came as props.
   */
  data() {
    return {
      vName: "",
      vBusinessID: "",
      vStreet: "",
      vPostcode: "",
      vCity: "",
      vEmail: "",
      vPhoneNumber: "",
    };
  },
  /**
   * Current values of the company that is to be updated. If we are creating
   * a new company then these are empty.
   */
  props: {
    id: String,
    name: String,
    business_id: String,
    street: String,
    postcode: String,
    city: String,
    email: String,
    phoneNumber: String,
  },
  methods: {
    /**
     * This method is called when user presses the forms submit button.
     * It validates the user input and if it is incorrect it informs the user
     * of their mistake via an alert. This method is used for both updating and
     * creating new entries in the database. After an succesful posting the user
     * is returned to homepage.
     */
    validateAndPost: function () {
      let answer = Validator.validate(
        this.vName,
        this.vBusinessID,
        this.vStreet,
        this.vPostcode,
        this.vCity,
        this.vEmail,
        this.vPhoneNumber
      );
      if (answer == "") {
        if (this.id != null) {
          CompaniesService.update(
            this.vName,
            this.vBusinessID,
            this.vStreet,
            this.vPostcode,
            this.vCity,
            this.vEmail,
            this.vPhoneNumber,
            this.id
          );
        } else {
          CompaniesService.create(
            this.vName,
            this.vBusinessID,
            this.vStreet,
            this.vPostcode,
            this.vCity,
            this.vEmail,
            this.vPhoneNumber
          );
        }
        this.$router.push({ name: "navBar" });
      } else {
        alert(answer);
      }
    },
  },
  /**
   * If this is update form then we move the values of the company from props
   * to input fields.
   */
  mounted() {
    if (this.id != null) {
      this.vName = this.name;
      this.vBusinessID = this.business_id;
      this.vStreet = this.street;
      this.vPostcode = this.postcode;
      this.vCity = this.city;
      this.vEmail = this.email;
      this.vPhoneNumber = this.phoneNumber;
    }
  },
  name: "UpdateForm",
};
</script>