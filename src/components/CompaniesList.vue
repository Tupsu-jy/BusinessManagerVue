<template>
  <div>
    <div v-show="search" class="form-row">
      <div class="form-group col-md-3">
        <label>Search by name</label>
        <input @input="searchByName" type="text" class="form-control" />
      </div>
      <div class="form-group col-md-3">
        <label>Search by city</label>
        <input @input="searchByCity" type="text" class="form-control" />
      </div>
      <div class="form-group col-md-3">
        <label>Search by business id</label>
        <input @input="searchById" type="text" class="form-control" />
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Company</th>
          <th>Street</th>
          <th>Post Code</th>
          <th>City</th>
          <th>Business id</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Edit or Delete</th>
        </tr>
      </thead>
      <tbody>
        <OneCompany
          v-for="company in showedCompanies"
          v-bind:key="company.id"
          v-bind:id="company.id"
          v-bind:name="company.name"
          v-bind:street="company.street"
          v-bind:postcode="company.postcode"
          v-bind:city="company.city"
          v-bind:business_id="company.business_id"
          v-bind:email="company.email"
          v-bind:phoneNumber="company.phone"
        ></OneCompany>
      </tbody>
    </table>
  </div>
</template>

<script>
import CompaniesService from "../services/CompaniesService";
import OneCompany from "./OneCompany";

export default {
  name: "CompaniesList",
  components: {
    OneCompany,
  },
  /**
   * Companies is the list of all companies. ShowedCopmanies is the list companies
   * that are showed to user.
   */
  data: function () {
    return {
      companies: null,
      showedCompanies: null,
    };
  },
  /**
   * Tells us whether we came here via "Search" or "View All" button.
   */
  props: {
    search: Boolean,
  },
  methods: {
    /**
     * Updates the showedCompanies to only include those companies that match
     * users search term.
     */
    searchByName(event) {
      this.showedCompanies = this.companies.filter((company) =>
        company.name.toLowerCase().includes(event.target.value)
      );
    },
    searchByCity(event) {
      this.showedCompanies = this.companies.filter((company) =>
        company.city.toLowerCase().includes(event.target.value)
      );
    },
    searchById(event) {
      this.showedCompanies = this.companies.filter((company) =>
        company.business_id.toLowerCase().includes(event.target.value)
      );
    },
    /**
     * Gets all companies from database and depending on search props value,
     * either includes them all in showedCompanies or leaves it empty.
     */
    setShowedCompanies() {
      CompaniesService.getAll().then((response) => {
        this.companies = response.data.rows;
        if (!this.search) {
          this.showedCompanies = this.companies;
        }
      });
    },
  },
  /**
   * If search prop changes then showedCompanies changes too.
   */
  watch: {
    search: function (newVal) {
      if (newVal) {
        this.showedCompanies = null;
      } else {
        this.showedCompanies = this.companies;
      }
    },
  },
  mounted() {
    this.setShowedCompanies();
  },
};
</script>