module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		clean: ["dist"],
		
		copy: {
			php: {
				files: {
					"dist": "php"
				}
			},
			js: {
				files: {
					"dist/js": "js"
				}
			},
			fonts: {
				files: {
					"dist/fonts": "fonts"
				}
			}
		},
		
		less: { // TODO: Add plugins
			styles: {
				files: {
					"dist/style.css": "less/style.less"
				}
			},
			bootstrap: {
				files: {
					"dist/bootstrap.css": "less/bootstrap/bootstrap.less" // TODO: Change to bootstrap.min.css
				}
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-less");
	
	grunt.registerTask("process", ["clean", "copy:php", "less:bootstrap", "less:styles", "copy:js", "copy:fonts",]);
};