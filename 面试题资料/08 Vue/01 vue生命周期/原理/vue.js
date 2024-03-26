class Vue{

	constructor( options ){

		
		options.beforeCreate.bind(this)()

		this.$data = options.data;
		
		options.created.bind(this)()
		options.beforeMount.bind(this)()

		this.$el = document.querySelector(options.el);
		
		options.mounted.bind(this)()

	}

}
