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
				options: {
					plugins: [
						new require("less-plugin-autoprefix")()
					]
				},
				files: {
					"dist/style.css": "less/style.less"
				}
			},
			bootstrap: {
				options: {
					plugins: [
						new (require("less-plugin-autoprefix"))(),
						new (require("less-plugin-clean-css"))()
					]
				},
				files: {
					"dist/bootstrap.min.css": "less/bootstrap/bootstrap.less" // TODO: Change to bootstrap.min.css
				}
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-less");
	
	grunt.registerTask("process", ["clean", "copy:php", "less:bootstrap", "less:styles", "copy:js", "copy:fonts",]);
};