<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ street }}</td>
    <td>{{ postcode }}</td>
    <td>{{ city }}</td>
    <td>{{ business_id }}</td>
    <td>{{ email }}</td>
    <td>{{ phoneNumber }}</td>
    <td>
      <router-link
        :to="{
          name: 'UpdateForm',
          params: {
            id: id,
            name: name,
            street: street,
            postcode: postcode,
            city: city,
            business_id: business_id,
            email: email,
            phoneNumber: phoneNumber,
          },
        }"
      >
        <button class="btn btn-sm btn-info" type="btn" role="button">
          UPDATE
        </button>
      </router-link>
      <button
        v-on:click="deleteCompany"
        class="btn btn-sm btn-link"
        type="btn"
        role="button"
      >
        DELETE
      </button>
    </td>
  </tr>
</template>

<script>
import CompaniesService from "../services/CompaniesService";

export default {
  name: "OneCompany",
  /**
   * All the information of this individual company.
   */
  props: {
    id: Number,
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
     * Deletes this company from database and then resets the companies listed.
     */
    deleteCompany: function () {
      CompaniesService.del(this.id);
      this.$parent.setShowedCompanies();
    },
  },
};
</script>