<script>
 import Layout from "../../layouts/main";

export default {
  components: {
     Layout,     
  },
  data() {
    return {
      title: "Receipts",
      items: [
        {
          text: "Jet66ERP"
        },
        {
          text: "Receipts",
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
        Receipts
      </div>
    </div>
  </Layout>
</template>