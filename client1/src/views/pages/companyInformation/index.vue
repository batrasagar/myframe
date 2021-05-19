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
      <div class="col-xl-2">
        Company Information
      </div>
    </div>
  </Layout>
</template>