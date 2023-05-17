// store.js
const Store = require('electron-store');

class DataStore extends Store {
  constructor(settings) {
    super(settings);

    // initialize with projects or empty array
    this.projects = this.get('projects') || [];
  }

  saveProjects() {
    // Save projects to JSON file
    this.set('projects', this.projects);

    // Returning 'this' allows method chaining
    return this;
  }

  getProjects() {
    // Get projects from JSON file
    this.projects = this.get('projects') || [];

    return this;
  }

  addProject(project) {
    // Merge the existing projects with the new project
    this.projects = [...this.projects, project];

    return this.saveProjects();
  }

  deleteProject(projectName) {
    // Filter out the target project
    this.projects = this.projects.filter(p => p.name !== projectName);

    return this.saveProjects();
  }
}

module.exports = DataStore;
