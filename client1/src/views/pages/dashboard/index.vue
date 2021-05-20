<script>
 import Layout from "../../layouts/main";

import Stat from "./widget";
 
export default {
  components: {
     Layout,
    Stat,
     
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Jet66ERP"
        },
        {
          text: "Dashboard",
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
      <div class="col-xl-6">
         <div class="card">
          <div class="card-body">
            <h4 class="card-title">File browser</h4>
            <p class="card-title-desc">
              The file input is the most gnarly of the bunch and requires additional JavaScript if you’d like to hook them up with functional
              <em>Choose file…</em> and selected file name text.
            </p>
            <div class="custom-file">
              <input id="customFile" type="file" class="custom-file-input" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
            
            <div class="row mt-3">
                <div class="col-xl-6">
                   <b-form-group
                    id="example text"
                    label-cols-sm="4"
                    label-cols-lg="4"
                    label="Width"
                    label-for="text"
                  >
                    <b-form-input for="text" value="9"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-xl-6">
                  <b-form-group
                    id="example text"
                    label-cols-sm="4"
                    label-cols-lg="4"
                    label="Height"
                    label-for="text"
                  >
                    <b-form-input for="text" value="12"></b-form-input>
                  </b-form-group>
                </div>
            </div>
           
            <h3 class="border p-3 text-danger">Add Frame
              <b-button class="float-right" variant="success">Add</b-button>
            </h3>
            
            <h3 class="border p-3 text-danger">Add Moulding
              <b-button class="float-right" variant="success">Add</b-button>
            </h3>
          </div>
        </div>
      </div>
    
      <div class="col-xl-6">
        <Stat />
      </div>
    </div>
     
        <h2>Preview</h2>
        <p class="shadow border p-4 bg-white" >
          image
       </p>
  </Layout>
</template>