<script>
import { layoutMethods } from "@/state/helpers";
/**
 * Right-sidebar 
 */
export default {
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"],
      },
      layout: this.$store ? this.$store.state.layout.layoutType : {} || {},
      width: this.$store ? this.$store.state.layout.layoutWidth : {} || {},
      topbar: this.$store ? this.$store.state.layout.topbar : {} || {},
      sidebarType: this.$store
        ? this.$store.state.layout.leftSidebarType
        : {} || {},
      loader: this.$store ? this.$store.state.layout.loader : {} || {},
    };
  },
  methods: {
    ...layoutMethods,
    hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware(event, el) {
      if (event.target.classList)
        return !event.target.classList.contains("toggle-right");
    },
    changeLayout(layout) {
      this.changeLayoutType({
        layoutType: layout,
      });
    },
    changeType(type) {
      return this.changeLeftSidebarType({
        leftSidebarType: type,
      });
    },
    changeWidth(width) {
      return this.changeLayoutWidth({
        layoutWidth: width,
      });
    },
    changeTopbartype(value) {
      return this.changeTopbar({
        topbar: value,
      });
    },
    changeloader() {
      return this.changeLoaderValue({
        loader: this.loader,
      });
    },
  },
};
</script>

<template>
  <div>
    <!-- Right Sidebar -->
    <div v-click-outside="config" class="right-bar">
      <div data-simplebar class="h-100">
        <div class="rightbar-title px-3 py-4">
          <a
            href="javascript:void(0);"
            class="right-bar-toggle float-right"
            @click="hide"
          >
            <i class="mdi mdi-close noti-icon"></i>
          </a>
          <h5 class="m-0">Settings</h5>
        </div>
        <div class="p-3">

        </div>
       
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>