<template>
  <!-- start booking form -->
  <form class="row booking-form p-3">
    <!-- radio buttons to choose trip type -->
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="form-check mx-2" v-for="(type, index) in types" :key="index">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          :id="type.id"
          :value="type.id"
          v-model="selectedType" />
        <label class="form-check-label" :for="type.id">
          {{ type.label }}
        </label>
      </div>
    </div>
    <hr class="mt-3" />
    <!-- if the trip is round trip (start inputs) -->
    <div
      v-if="selectedType == '1'"
      class="row row-cols-lg-auto g-3 align-items-center justify-content-center mt-0">
      <div class="col-12 mb-3">
        <label for="flignFrom" class="form-label d-flex">
          <span class="material-symbols-rounded mx-1"> flight_takeoff </span>
          From
        </label>
        <input
          type="text"
          class="form-control"
          id="flignFrom"
          placeholder="Flight from?" />
      </div>

      <div class="col-12 mb-3">
        <label for="flightTo" class="form-label d-flex">
          <span class="material-symbols-rounded mx-1"> flight_land </span> To
        </label>
        <input
          type="text"
          class="form-control"
          id="flightTo"
          placeholder="Where to?" />
      </div>

      <div class="col-12 mb-3">
        <label for="depart" class="form-label d-flex">
          <span class="material-symbols-rounded mx-1"> calendar_month </span>
          Depart
        </label>
        <input
          type="date"
          class="form-control"
          id="depart"
          placeholder="DD/MM/YYYY" />
      </div>

      <div class="col-12 mb-3">
        <label for="return" class="form-label d-flex">
          <span class="material-symbols-rounded mx-1"> calendar_month </span>
          Return
        </label>
        <input
          type="date"
          class="form-control"
          id="return"
          placeholder="DD/MM/YYYY" />
      </div>

      <div class="col-12 mb-3">
        <label for="class" class="form-label d-flex">
          <span class="material-symbols-rounded mx-1">
            airline_seat_recline_extra
          </span>
          Cabin Class & Travelers
        </label>
        <select class="form-select" aria-label="Large select example">
          <option selected>Select class</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col-12">
        <div class="d-grid gap-2" v-if="isMobileView">
          <button type="submit" class="btn btn-dark d-flex justify-content-center align-items-center">
            <span class="material-symbols-rounded mx-2"> search </span>
            <span> {{ $t("search") }} </span>
          </button>
        </div>

        <button type="submit" class="btn btn-main d-flex" v-else>
          <span class="material-symbols-rounded"> search </span>
        </button>
      </div>
    </div>
    <!-- if the trip is one way -->
    <div class="row" v-else>
      <div class="col-12">
        <span>One way trip</span>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
// =============== initialize data =============
// Reactive variable to track if the screen is in mobile view
const isMobileView = ref(false);

// Define the types of trips
const types = ref([
  { id: "0", label: "One way" },
  { id: "1", label: "Round trip" },
]);

// Set the default selected type to '1' (Round trip)
const selectedType = ref("1");
// ============== methods ==================
const updateScreenSize = () => {
  isMobileView.value = window.innerWidth < 768;
};
// =============== onMounted and onBeforMounted ===============
onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>
<style lang="scss" scoped>
.booking-form {
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  .material-symbols-rounded {
    color: var(--secondary-color);
  }
  button {
    .material-symbols-rounded {
      color: #fff;
    }
  }
}
</style>
