module.exports = function( grunt ) {

	grunt.initConfig({

		uglify : {
		  	options : {
				mangle : false
		  	},

		  	my_target : {
				files : {
			  	'dev/assets/js/main.js' : [ 'dev/assets/_js/scripts.js' ]
				}
		  	}
		}, // uglify



		compass: {
			dev: {
				options: {
					//noLineComments: true,
					//relativeAssets: true,
					outputStyle : 'expanded',
					sassDir: 'dev/assets/_sass',
					cssDir: 'dev/assets/css',
					require: 'susy',
					require: 'breakpoint'
				}
			}
		}, // compass



		watch : {
		  	dev : {
				files: [
					'dev/assets/_sass/*.scss',
					'dev/assets/css/main.css',
					'dev/assets/_js/*.js',
            	],

				tasks : [
					'uglify', 'compass'
				]
		  	}
		}, // watch



		clean: ['dist/*'], // Limpar pasta Dist



		copy : {
		  	dev: {
			    files: [
			      	{
			      		expand: true,
			      		cwd: 'dev/_site/',
			      		src: [
			      			'*',
			      			'assets/css/*',
			      			'assets/js/*',
			      			'assets/img/*',
			      			'!config.rb'
			      		],
			      		dest: 'dist/',
			      		dot: true
			      	}
			    ]
		  	}
		}, // Copiar arquivos finais
	});

	// Plugins do Grunt
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-compass');
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-clean');
	grunt.loadNpmTasks( 'grunt-contrib-copy');


	// Tarefas que serão executadas
	grunt.registerTask( 'default', [ 'uglify', 'compass'] );

	// Tarefa para Watch
	grunt.registerTask( 'w', [ 'watch' ] );

};
