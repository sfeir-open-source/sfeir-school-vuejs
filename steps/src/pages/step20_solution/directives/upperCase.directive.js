import Vue from 'vue';

const onInput=  ({ target }) => (
  target.value = target.value.toUpperCase()
);

const resetInput =  ({ target }) => ( target.value = null);


export default Vue.directive('upper', {
  inserted(el){
    el.addEventListener('input', onInput)
  },
   unbind(el){
    el.removeEventListener('input', resetInput)
   }
})