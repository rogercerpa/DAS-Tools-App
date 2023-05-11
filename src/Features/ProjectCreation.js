
import React from 'react';

const ProjectCreation = () => {
  return (
   
    <div class="bg-gray-200">
  <div class="container mx-auto px-4 py-5 flex justify-between items-center">
    <h1 class="text-xl font-bold">Project Creation</h1>
    <button class="btn btn-primary">Create Project</button>
  </div>
  <div class="container mx-auto px-4 py-5">
    <div class="form-group">
      <label for="project-name">Project Name</label>
      <input type="text" class="form-control" id="project-name" placeholder="Enter project name"/>
    </div>
    <div class="form-group">
      <label for="project-container">Project Container</label>
      <input type="text" class="form-control" id="project-container" placeholder="Enter project container"/>
    </div>
    <div class="form-group">
      <label for="rfa-number">RFA Number</label>
      <input type="text" class="form-control" id="rfa-number" placeholder="Enter RFA number"/>
    </div>
    <div class="form-group">
      <label for="revision">Revision</label>
      <input type="radio" name="revision" value="1"/> New Project
      <input type="radio" name="revision" value="2"/> Revision
    </div>
    <div class="form-group">
      <label for="rfa-type">RFA Type</label>
      <select class="form-control" id="rfa-type">
        <option value="BOM">BOM (No Layout)</option>
        <option value="LAYOUT">BOM (With Layout)</option>
        <option value="BUDGET">Budget BOM</option>
        <option value="SUBMITTAL">Submittal</option>
        <option value="RELEASE">Release/ Preprogramming</option>
        <option value="RelocBOM">Reloc BOM</option>
        <option value="RelocSUB">Reloc Submittal</option>
        <option value="RelocControlsBOM">Reloc Controls BOM</option>
        <option value="RelocControlsSUB">Reloc Controls Submittal</option>
        <option value="GRAPHICS">Graphics</option>
        <option value="AtriusBOM">Atrius BOM (No Layout)</option>
        <option value="AtriusLAYOUT">Atrius BOM (With Layout)</option>
        <option value="AtriusSub">Atrius Submittal</option>
        <option value="ControlsAtriusSub">Controls Atrius Submittal</option>
        <option value="ControlsAtriusLayout">Controls Atrius Layout</option>
      </select>
    </div>
    <div class="form-group">
      <label for="agency-number">Agency Number</label>
      <input type="text" class="form-control" id="agency-number" placeholder="Enter agency number"/>
    </div>
  </div>
  <div class="container mx-auto px-4 py-5 flex justify-between items-center">
    <button class="btn btn-secondary">Cancel</button>
    <button class="btn btn-primary">Create Project</button>
  </div>
</div>

  );
};

export default ProjectCreation;
