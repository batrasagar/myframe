<script>
 import Layout from "../../layouts/main";

export default {
  components: {
     Layout,     
  },
  data() {
    return {
      title: "Mouldings",
      items: [
        {
          text: "Jet66ERP"
        },
        {
          text: "Mouldings",
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
        Mouldings
      </div>
    </div>
  </Layout>
</template>