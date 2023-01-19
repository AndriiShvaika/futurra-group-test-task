const app = Vue.createApp({
  data() {
    return {
      isModalOpen: false,
      seconds: 180,
      formattedSeconds: "00",
    };
  },
  methods: {
    showModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
  mounted() {
    const interval = setInterval(() => {
      this.seconds = --this.seconds;

      this.formattedSeconds = this.seconds % 60;
      if (this.formattedSeconds < 10) {
        this.formattedSeconds = "0" + this.formattedSeconds;
      }

      if (this.seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
  },
});
