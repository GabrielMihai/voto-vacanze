<template>
  <div class="h-1/6 flex border-b-2 border-b-black">
  <h1>Ciaone</h1>
    <div
      v-for="(value, key, index) in state.lazyUser"
      :key="index"
      :class="`w-1/8 border-r-2 border-r-black ${
        key === 'name' ? 'bg-slate-700' : key === 'destination' ? 'bg-slate-600' : 'bg-slate-500'
      } flex justify-center items-center text-white`"
    >
      <div v-if="['name', 'destination', 'total'].includes(key)">
        <div v-if="key === 'destination'" class="flex flex-col">
          {{ value }}
          <div class="flex justify-center">
            <input
              type="checkbox"
              name="already_been"
              id="already_been"
              @input="onAlreadyBeenCheck"
            />
            <label for="already_been" class="ml-2">Già visitato</label>
          </div>
        </div>
        <div v-else>
          {{ value }}
        </div>
      </div>
      <div
        v-else
        @click="openInputDialog(key)"
        class="w-full h-full flex justify-center items-center"
      >
        {{ value === undefined ? 'BOH' : value }}
      </div>
    </div>

    <div
      class="w-screen h-screen absolute top-0 left-0 bg-slate-900 opacity-90 flex justify-center items-center"
      v-if="state.showInputDialog"
    >
      <div
        class="w-96 h-56 bg-black opacity-95 flex flex-col text-white text-5xl font-bold border-2 border-white"
      >
        <div class="flex border-b-2 border-b-white w-full h-1/2">
          <div
            class="border-r-2 border-r-white w-1/2 flex justify-center items-center"
            @click="onValueClick(-1)"
          >
            -1
          </div>
          <div class="w-1/2 flex justify-center items-center" @click="onValueClick(1)">1</div>
        </div>
        <div class="flex w-full h-1/2">
          <div
            class="border-r-2 border-r-white w-1/2 flex justify-center items-center"
            @click="onValueClick(2)"
          >
            2
          </div>
          <div class="w-1/2 flex justify-center items-center" @click="onValueClick(3)">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { cloneDeep } from 'lodash';

const props = defineProps({
  user: undefined,
});

const state = reactive({
  lazyUser: ref(cloneDeep(props.user)),
  showInputDialog: false,
  selectedKey: undefined,
});

const openInputDialog = (key) => {
  state.showInputDialog = true;
  state.selectedKey = key;
};

const onValueClick = (value) => {
  state.lazyUser[state.selectedKey] = value;
  state.selectedKey = undefined;
  state.showInputDialog = false;
  let totalTemp = 0;
  Object.keys(state.lazyUser).forEach((key) => {
    if (!['name', 'destination', 'total'].includes(key) && state.lazyUser[key] !== undefined) {
      totalTemp = totalTemp + state.lazyUser[key];
    }
  });

  state.lazyUser.total = totalTemp === -5 ? 'Già visitato' : totalTemp;
};

const onAlreadyBeenCheck = (event) => {
  let checkValue = event.target.checked;
  if (checkValue) {
    Object.keys(state.lazyUser).forEach((key) => {
      if (!['name', 'destination', 'total'].includes(key)) {
        state.lazyUser[key] = -1;
      }
      state.lazyUser.total = 'Già visitato';
    });
  } else {
    Object.keys(state.lazyUser).forEach((key) => {
      if (!['name', 'destination', 'total'].includes(key)) {
        state.lazyUser[key] = undefined;
      }
    });
    state.lazyUser.total = 0;
  }
};
</script>
