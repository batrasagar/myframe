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
      <div class="col-xl-2">
        <Stat />
      </div>
    </div>
  </Layout>
</template>