export default {
    mounted() {
        let { description } = this.$opitions
        let meta = document.getElementsByTagName('meta')

        if (description) {
            for (var i = 0; i < meta.length; i++) {
                if (meta[i].name.toLocaleLowerCase() === 'description') {
                    meta[i].content = description
                }

            }

        }
    }
}