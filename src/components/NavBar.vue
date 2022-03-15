<template>
  <div>
    <div class="textBox" id="text">
      Business Manager provides a platform for managing a company's interactions
      with current and potential businesses. It helps business-to-business
      contact management and improves business performance.
    </div>
    <form>
      <div className="form-row">
        <div className="form-group col-md-2">
          <router-link :to="{ name: 'UpdateForm' }">
            <button class="btn btn-info btn-block text-left">CREATE</button>
          </router-link>
        </div>
        <div className="form-group col-md-2">
          <router-link
            :to="{ name: 'viewCompanies', params: { search: true } }"
          >
            <button class="btn btn-outline-info">SEARCH</button>
          </router-link>
        </div>
        <div className="form-group col-md-2">
          <router-link
            :to="{ name: 'viewCompanies', params: { search: false } }"
          >
            <button class="btn btn-outline-info">VIEW ALL</button>
          </router-link>
        </div>
      </div>
      <div id="locationInfo" className="controls form-inline"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>