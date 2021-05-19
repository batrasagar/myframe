<script>
export default {
  data() {
    return {
      statData: [
        {
          title: "Number of Sales",
          icon: "ri-stack-line",
          value: "img1",
          subvalue: " 2.4% "
        },
        {
          title: "Sales Revenue",
          icon: "ri-store-2-line",
          value: "img2",
          subvalue: " 2.4% "
        },
        {
          title: "Average Price",
          icon: "ri-briefcase-4-line",
          value: "img3",
          subvalue: " 2.4% "
        },{
          title: "Number of Sales",
          icon: "ri-stack-line",
          value: "1452",
          subvalue: " 2.4% "
        },
        {
          title: "Sales Revenue",
          icon: "ri-store-2-line",
          value: "$ 38452",
          subvalue: " 2.4% "
        },
        {
          title: "Average Price",
          icon: "ri-briefcase-4-line",
          value: "$ 15.4",
          subvalue: " 2.4% "
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-12" v-for="(data, index) in statData" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2">{{data.title}}</p>
              <h4 class="mb-0">{{data.value}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>