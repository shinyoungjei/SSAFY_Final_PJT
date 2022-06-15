<template>
  <b-contatiner>
    <template v-if="mode === 'view'">
      <div style="height: 150px"></div>
      <div class="view">
        <label>ID : </label>
        <b-form-input class="input" disabled v-model="member.memberid" /><br />
      </div>
      <div class="view">
        <label>Name : </label>
        <b-form-input
          class="input"
          disabled
          v-model="member.membername"
        /><br />
      </div>
      <div class="view">
        <label>Pass : </label>
        <b-form-input class="input" disabled v-model="member.memberpwd" /><br />
      </div>
      <div class="view">
        <label>Email : </label>
        <b-form-input
          class="input"
          disabled
          v-model="member.memberemail"
        /><br />
      </div>
      <div class="view">
        <label>Phone : </label>
        <b-form-input
          class="input"
          disabled
          v-model="member.membertell"
        /><br />
      </div>
    </template>
  </b-contatiner>
</template>

<script>
export default {};
</script>

<style></style>
