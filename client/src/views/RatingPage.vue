<template>
  <div>
    <div class="row">
      <div class="col-md-8 mx-auto mt-5">
        <RatingCard />

        <b-button block variant="primary" class="mt-4">Valider</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import RatingCard from "../components/RatingCard";
export default {
  name: "RatingPage",
  components: {
    RatingCard,
  },
};
</script>
