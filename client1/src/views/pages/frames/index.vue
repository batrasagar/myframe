<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Customers Component
 */
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      title: "Frames",
      items: [
        {
          text: "Ecommerce",
        },
        {
          text: "Frames",
          active: true,
        },
      ],
      framesData: [
        {
          shadeName: "Red",
          email: "CarolynHarvey@rhyta.com",
          phone: "580-464-4694",
          rate: "$ 3245",
          date: "06 Apr, 2020",
        },
        {
          shadeName: "Green",
          email: "AngelynHardin@dayrep.com",
          phone: "913-248-2690",
          rate: "$ 2435",
          date: "05 Apr, 2020",
        },
        {
          shadeName: "Beige",
          email: "CarrieThompson@rhyta.com",
          phone: "734-819-9286",
          rate: "$ 2653",
          date: "04 Apr, 2020",
        },
        {
          shadeName: "Terracota",
          email: "KathleenHaller@dayrep.com",
          phone: "313-742-3333",
          rate: "$ 2135",
          date: "03 Apr, 2020",
        },
        {
          shadeName: "Brown",
          email: "MarthaBeasley@teleworm.us",
          phone: "301-330-5745",
          rate: "$ 2698",
          date: "02 Apr, 2020",
        },
        {
          shadeName: "Black",
          email: "KathrynHudson@armyspy.com",
          phone: "414-453-5725",
          rate: "$ 2758",
          date: "02 Apr, 2020",
        },
        {
          shadeName: "Blue",
          email: "RobertBott@armyspy.com",
          phone: "712-237-9899",
          rate: "$ 2836",
          date: "01 Apr, 2020",
        },
        {
          shadeName: "Gray",
          email: "MaryMcDonald@armyspy.com",
          phone: "317-510-25554",
          rate: "$ 3245",
          date: "31 Mar, 2020",
        },
        {
          shadeName: "Red",
          email: "KeithRainey@jourrapide.com",
          phone: "214-712-1810",
          rate: "$ 3125",
          date: "30 Mar, 2020",
        },
        {
          shadeName: "Crimson",
          email: "AnthonyRusso@jourrapide.com",
          phone: "412-371-8864",
          rate: "$ 2456",
          date: "30 Mar, 2020",
        },
        {
          shadeName: "Orange",
          email: "DonnaBetz@jourrapide.com",
          phone: "626-583-5779",
          rate: "$ 3423",
          date: "29 Mar, 2020",
        },
        {
          shadeName: "Pink",
          email: "AngieAndres@armyspy.com",
          phone: "213-494-4527",
          rate: "$ 3245",
          date: "28 Apr, 2020",
        },
      ],
      customers: {
        name: "",
        email: "",
        rate: "",
        phone: "",
        date: "",
      },
      submitted: false,
      showmodal: false,
    };
  },
  validations: {
    customers: {
      name: { required },
      rate: { required },
      email: { required, email },
      phone: { required, minLength: minLength(10) },
      date: { required },
    },
  },
  methods: {
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        const name = this.customers.name;
        const rate = this.customers.rate;
        const email = this.customers.email;
        const phone = this.customers.phone;
        const date = this.customers.date;
        this.framesData.push({
          name,
          email,
          rate,
          phone,
          date,
        });
        this.showmodal = false;
      }
      this.submitted = false;
      this.customers = {};
    },
    /**
     * hode mondal on close
     */
    // eslint-disable-next-line no-unused-vars
    hideModal(e) {
      this.submitted = false;
      this.showmodal = false;
      this.contacts = {};
    },

    /**
     * Filter the data of search
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div>
              <a
                href="javascript:void(0);"
                class="btn btn-success mb-2 float-right"
                @click="showmodal = true"
              >
                <i class="mdi mdi-plus mr-2"></i> Add Frame
              </a>
            </div>
            <div class="table-responsive mt-3">
              <table
                class="table table-centered datatable dt-responsive nowrap"
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  width: 100%;
                "
              >
                <thead class="thead-light">
                  <tr>
                    <th>Pic</th>
                    <th>ShadeName</th>
                    <th>Rate</th>
      
                    <th style="width: 120px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(frame, index) in framesData" :key="index">
                    <td>
                      <img
                        src="@/assets/images/product/img-4.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>{{ frame.shadeName }}</td>
                    <td>{{ frame.rate }}</td>
                    
                    <td>
                      <a
                        href="javascript:void(0);"
                        class="mr-3 text-primary"
                        v-b-tooltip.hover
                        title="Edit"
                      >
                        <i class="mdi mdi-pencil font-size-18"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        class="text-danger"
                        v-b-tooltip.hover
                        title="Delete"
                      >
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <b-modal
      id="modal-1"
      v-model="showmodal"
      title="Add Frames"
      title-class="text-dark font-18"
      hide-footer
    >
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-lg-8">
            <div class="form-group">
              <label for="name">Shade Name</label>
              <input
                id="name"
                v-model="customers.name"
                type="text"
                class="form-control"
                placeholder="Enter Shade Name"
                :class="{ 'is-invalid': submitted && $v.customers.name.$error }"
              />
              <div
                v-if="submitted && !$v.customers.name.required"
                class="invalid-feedback"
              >
                Name is required
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label for="position">Rate(SqFt)</label>
              <input
                id="position"
                v-model="customers.phone"
                type="text"
                class="form-control"
                placeholder="0.00"
                :class="{
                  'is-invalid': submitted && $v.customers.phone.$error,
                }"
              />
              <div
                v-if="submitted && !$v.customers.phone.required"
                class="invalid-feedback"
              >
                Phone is required
              </div>
            </div>
          </div>
        </div>

        <b-form-group id="example-color" label="Color" label-for="color">
          <b-form-input
            id="color"
            type="color"
            name="color"
            value="#556ee6"
          ></b-form-input>
        </b-form-group>

        <div class="text-right">
          <button type="submit" class="btn btn-success">Save</button>
          <b-button class="ml-1" variant="danger" @click="hideModal"
            >Cancel</b-button
          >
        </div>
      </form>
    </b-modal>
    <!-- end modal -->
  </Layout>
</template>