<script>
 import Layout from "../../layouts/main";

export default {
  components: {
     Layout,     
  },
  data() {
    return {
      title: "Company Information",
      items: [
        {
          text: "Jet66ERP"
        },
        {
          text: "Company Information",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">

            <h4 class="card-title">Company Information</h4>

            <b-form-checkbox v-model="checked" switch class="mb-1 float-right">
              <label>Edit</label>
            </b-form-checkbox>

            <p class="card-title-desc">
              Please update your Company Informaiton
            </p>
            
            <div>
            <b-form-group
                    id="example"
                    label-cols-sm="3"
                    label-cols-lg="3"
                    label="Company"
                    label-for="text"
                >
                <b-form-input for="text" value=""></b-form-input>
            </b-form-group>
            <b-form-group
                    id="example"
                    label-cols-sm="3"
                    label-cols-lg="3"
                    label="Contact Person"
                    label-for="text"
                >
                <b-form-input for="text" value=""></b-form-input>
            </b-form-group>
            <b-form-group
                    id="example"
                    label-cols-sm="3"
                    label-cols-lg="3"
                    label="Mobile"
                    label-for="text"
                >
                <b-form-input for="text" value=""></b-form-input>
            </b-form-group>
            <b-form-group
                    id="example"
                    label-cols-sm="3"
                    label-cols-lg="3"
                    label="Email"
                    label-for="text"
                >
                <b-form-input for="text" value=""></b-form-input>
            </b-form-group>
            <b-form-group
                    id="example"
                    label-cols-sm="3"
                    label-cols-lg="3"
                    label="Address"
                    label-for="text"
                >
                <b-form-textarea for="text" value=""></b-form-textarea>
            </b-form-group>
              <b-form-group
                    id="example"
                    label-cols-sm="3"
                    label-cols-lg="3"
                    label="GST Number"
                    label-for="text"
                >
                <b-form-input for="text" value=""></b-form-input>
            </b-form-group>
            
             <div class="button-items float-right">
              <button
                type="button"
                class="btn btn-success"
                data-toggle="button"
                aria-pressed="false"
              >Update</button>
            </div>

            </div>
          </div>
        </div>
      </div>
       
    </div>
  </Layout>
</template>