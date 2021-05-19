<script>
 import Layout from "../../layouts/main";

export default {
  components: {
     Layout,     
  },
  data() {
    return {
      title: "Orders",
      items: [
        {
          text: "Jet66ERP"
        },
        {
          text: "Orders",
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
        Orders
      </div>
    </div>
  </Layout>
</template>