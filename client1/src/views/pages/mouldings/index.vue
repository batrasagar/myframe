<script>
import { required,  minLength } from "vuelidate/lib/validators";
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
      title: "Mouldings",
      items: [
        {
          text: "Ecommerce",
        },
        {
          text: "Mouldings",
          active: true,
        },
      ],
      customersData: [
        {
          name: "Carolyn Harvey",
          size: "2",
          phone: "580-464-4694",
          rate: "$ 3245",
          date: "06 Apr, 2020",
        },
        {
          name: "Angelyn Hardin",
          size: "1",
          phone: "913-248-2690",
          rate: "$ 2435",
          date: "05 Apr, 2020",
        },
        {
          name: "Carrie Thompson",
          size: "3",
          phone: "734-819-9286",
          rate: "$ 2653",
          date: "04 Apr, 2020",
        },
        {
          name: "Kathleen Haller",
          size: "2",
          phone: "313-742-3333",
          rate: "$ 2135",
          date: "03 Apr, 2020",
        },
        {
          name: "Martha Beasley",
          size: "1",
          phone: "301-330-5745",
          rate: "$ 2698",
          date: "02 Apr, 2020",
        },
        {
          name: "Kathryn Hudson",
          size: "2",
          phone: "414-453-5725",
          rate: "$ 2758",
          date: "02 Apr, 2020",
        },
        {
          name: "Robert Bott",
          size: "4",
          phone: "712-237-9899",
          rate: "$ 2836",
          date: "01 Apr, 2020",
        },
        {
          name: "Mary McDonald",
          size: "2",
          phone: "317-510-25554",
          rate: "$ 3245",
          date: "31 Mar, 2020",
        },
        {
          name: "Keith Rainey",
          size: "2",
          phone: "214-712-1810",
          rate: "$ 3125",
          date: "30 Mar, 2020",
        },
        {
          name: "Anthony Russo",
          size: "2",
          phone: "412-371-8864",
          rate: "$ 2456",
          date: "30 Mar, 2020",
        },
        {
          name: "Donna Betz",
          size: "2",
          phone: "626-583-5779",
          rate: "$ 3423",
          date: "29 Mar, 2020",
        },
        {
          name: "Angie Andres",
          size: "2",
          phone: "213-494-4527",
          rate: "$ 3245",
          date: "28 Apr, 2020",
        },
      ],
      customers: {
        name: "",
        size: "",
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
      size: { required },
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
        const size = this.customers.size;
        const phone = this.customers.phone;
        const date = this.customers.date;
        this.customersData.push({
          name,
          size,
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
                <i class="mdi mdi-plus mr-2"></i> Add Module
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
                    <th>Moulding Name</th>
                    <th>Size</th>
                    <th>Rate</th>
                    <th style="width: 120px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in customersData" :key="index">
                    <td>
                      <img
                        src="@/assets/images/product/img-4.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.size }}</td>
                    <td>{{ item.rate }}</td>
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
      title="Add Moulding"
      title-class="text-dark font-18"
      hide-footer
    >
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-lg-8">
            <div class="form-group">
              <label for="name">Moulding Name</label>
              <input
                id="name"
                v-model="customers.name"
                type="text"
                class="form-control"
                placeholder="Enter Moulding Name"
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
              <label for="position">Rate(Ft)</label>
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

        <div class="form-group">
          <label class="form-label">Select Size</label>
          <div  >
            <select class="form-control">
              <option>Select</option>
              <option>Large select</option>
              <option>Small select</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Upload</label>
          <div>
             <div class="custom-file">
              <input id="customFile" type="file" class="custom-file-input" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </div>
        </div>


<div class="row">
              <div class="col-md-6">
                <img
                  class="img-thumbnail"
                  alt="200x200"
                  width="200"
                  src="@/assets/images/small/img-3.jpg"
                  data-holder-rendered="true"
                />
              </div>
</div>
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