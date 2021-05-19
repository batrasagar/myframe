<script>
 import Layout from "../../layouts/main";

export default {
  components: {
     Layout,     
  },
  data() {
    return {
      title: "Frames",
      items: [
        {
          text: "Jet66ERP"
        },
        {
          text: "Frames",
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
        Frames
      </div>
    </div>
  </Layout>
</template>