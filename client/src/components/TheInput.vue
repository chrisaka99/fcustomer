<template>
  <div>
    <div class="form-group">
      <label :for="inputId">{{ textLabel }}</label>
      <input
        :type="inputType"
        autocomplete="off"
        class="form-control"
        :id="inputId"
        :name="name"
        v-model="inputValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheInput",
  props: {
    name: { required: true },
    textLabel: { required: true },
    inputId: { required: true },
    inputType: {
      required: true,
    },
  },
  data() {
    return {
      inputValue: "",
      errors: [],
    };
  },
};
</script>

<style scoped>
input {
  background-color: #fcfcfc;
  border-radius: 0;
}

input:focus {
  transition: all 0.2s;
}

input:focus {
  box-shadow: inset 0 -1px 0 #ddd;
  border: 1px solid #348def;
}
</style>
