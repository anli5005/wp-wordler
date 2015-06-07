module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		clean: {
			dist: ["dist"],
		},
		
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
		
		less: {
			styles: {
				options: {
					plugins: [
						new (require("less-plugin-autoprefix"))()
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
					"dist/bootstrap.min.css": "less/bootstrap/bootstrap.less"
				}
			}
		},
		cssbeautifier: {
			styles: {
				options: {
					indent: "\t"
				},
				files: {
					"dist/style.css": "dist/style.css"
				}
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-cssbeautifier");
	
	grunt.registerTask("process", ["clean:dist", "copy:php", "less:bootstrap", "less:styles", "cssbeautifier:styles", "copy:js", "copy:fonts"]);
};