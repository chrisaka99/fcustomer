<template>
  <div class="text-center">
    <b-card bg-variant="dark" text-variant="white" title="Question X">
      <b-card-text class="my-5">
        Avez vous aimé la dernière conception de site web faite par Komptech
        pour l'exposition de vos produits ?
      </b-card-text>
      <b-form-rating
        v-model="rating"
        variant="warning"
        class="mb-2"
      ></b-form-rating>
      {{ rating }}
    </b-card>
  </div>
</template>

<script>
export default {
  name: "RatingCard",
  data() {
    return {
      rating: "",
    };
  },
};
</script>
