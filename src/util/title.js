export default {
    mounted() {
        let { title } = this.$opitions
        if (title) {
            title = typeof title === 'function' ? title.call(this) : title
            document.title = '${ title } - 4 moji'
        }
    }
}