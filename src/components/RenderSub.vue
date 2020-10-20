<script>
    export default {
        name : 'render-sub',
        render: function(createElement) {
            return createElement(
                'h' + this.level,
                this.$slots.default
            );
        },
        props:{
            level: {
                type: Number,
                required:true
            }
        },
    }
</script>