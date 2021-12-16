<template>
  <div class="messaging_item" :class="rowReverse">
    <div class="messaging_item__avatar">
      <c-avatar :size="36" :id="id" :src="computeAvatar(id)" status="online" />
    </div>
    <div class="messaging_item__body">
      <div class="pa-2">
        {{ text }}
      </div>
      <div class="caption px-2 text--secondary">
        {{ createdAt | formateDate }}
      </div>
    </div>
  </div>
</template>

<script>
import CAvatar from '@/components/avatar/CAvatar'
import { format } from 'date-fns'
import { mapGetters } from 'vuex'
export default {
  components: {
    CAvatar,
  },
  filters: {
    formateDate(val) {
      return format(val, 'yyyy-MM-dd H:mm:s')
    },
  },
  props: {
  id: [Number, String],
    status: [Number, String],
    text: [String],
    createdAt: [String, Number],
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getAvatar', 'getid', 'getClientId', 'getStatusByName']),
    isMyOwn() {
      return this.id === this.getid
    },
    rowReverse() {
      return {
        'flex-row-reverse': !this.isMyOwn,
      }
    },
  },
  methods: {
    computeAvatar(id) {
      return this.getid === id ? this.getAvatar : ''
    },
  },
}
</script>

<style lang="sass" scoped>
.messaging_item
  display: flex
  margin-top: 25px
  &__avatar
    margin: 0 25px
  &__body
    // flex: 1 1 auto
    background: #eee
</style>
