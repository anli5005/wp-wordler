module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		clean: ["dist"],
		
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
	grunt.loadNpmTasks("grunt-contrib-less");
	
	grunt.registerTask("process", ["clean", "less:bootstrap", "less:styles"]);
};